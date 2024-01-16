let url = new URL(location.href);
let userValue = url.searchParams.get('value')
let user = JSON.parse(userValue);

let p_userId = document.createElement('p');
let p_id = document.createElement('p');
let p_title = document.createElement('p');
let p_body = document.createElement('p');

p_userId.innerText = 'User_ID: ' + user.userId;
p_id.innerText ='Id: ' + user.id;
p_title.innerText ='Title: ' +  user.title;
p_body.innerText = 'Body: ' + user.body;

document.body.appendChild(p_userId);
document.body.appendChild(p_id);
document.body.appendChild(p_title);
document.body.appendChild(p_body);

let userDetailsContainer = document.createElement('div');
userDetailsContainer.classList.add('post-details');

userDetailsContainer.appendChild(p_userId);
userDetailsContainer.appendChild(p_id);
userDetailsContainer.appendChild(p_title);
userDetailsContainer.appendChild(p_body);

document.body.appendChild(userDetailsContainer);

fetch(`https://jsonplaceholder.typicode.com/posts/${user.userId}/comments`)
    .then((value) => value.json())
    .then((json) => {
        let div_i = 1;
        let div_2row: HTMLDivElement;
        let h2 = document.createElement('h2');
        h2.innerText = 'Comments:';
        document.body.appendChild(h2);

        for (const jsonElement of json) {
            let commentContainer = document.createElement('div');
            commentContainer.classList.add('comment-container');

            let p_body = document.createElement('p');
            p_body.innerText = `Comment: ${jsonElement.body}`;
            let p_name = document.createElement('p');
            p_name.innerText = `Name: ${jsonElement.name}`;
            let p_email = document.createElement('p');
            p_email.innerText = `Email: ${jsonElement.email}`;

            commentContainer.appendChild(p_name);
            commentContainer.appendChild(p_email);
            commentContainer.appendChild(p_body);
            if (div_i % 4 === 1) {
                div_2row = document.createElement('div');
            }

            div_2row.appendChild(commentContainer);

            if (div_i % 4 === 0 || div_i === json.length) {
                div_2row.classList.add('div2row');
                document.body.appendChild(div_2row);
            }

            div_i++;
        }
    });