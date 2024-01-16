var url = new URL(location.href);
var userValue = url.searchParams.get('value');
var user = JSON.parse(userValue);
var p_userId = document.createElement('p');
var p_id = document.createElement('p');
var p_title = document.createElement('p');
var p_body = document.createElement('p');
p_userId.innerText = 'User_ID: ' + user.userId;
p_id.innerText = 'Id: ' + user.id;
p_title.innerText = 'Title: ' + user.title;
p_body.innerText = 'Body: ' + user.body;
document.body.appendChild(p_userId);
document.body.appendChild(p_id);
document.body.appendChild(p_title);
document.body.appendChild(p_body);
var userDetailsContainer = document.createElement('div');
userDetailsContainer.classList.add('post-details');
userDetailsContainer.appendChild(p_userId);
userDetailsContainer.appendChild(p_id);
userDetailsContainer.appendChild(p_title);
userDetailsContainer.appendChild(p_body);
document.body.appendChild(userDetailsContainer);
fetch("https://jsonplaceholder.typicode.com/posts/".concat(user.userId, "/comments"))
    .then(function (value) { return value.json(); })
    .then(function (json) {
    var div_i = 1;
    var div_2row;
    var h2 = document.createElement('h2');
    h2.innerText = 'Comments:';
    document.body.appendChild(h2);
    for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
        var jsonElement = json_1[_i];
        var commentContainer = document.createElement('div');
        commentContainer.classList.add('comment-container');
        var p_body_1 = document.createElement('p');
        p_body_1.innerText = "Comment: ".concat(jsonElement.body);
        var p_name = document.createElement('p');
        p_name.innerText = "Name: ".concat(jsonElement.name);
        var p_email = document.createElement('p');
        p_email.innerText = "Email: ".concat(jsonElement.email);
        commentContainer.appendChild(p_name);
        commentContainer.appendChild(p_email);
        commentContainer.appendChild(p_body_1);
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
