var url = new URL(location.href);
var userValue = url.searchParams.get('value');
var user = JSON.parse(userValue);
var p_id = document.createElement('p');
var p_name = document.createElement('p');
var p_username = document.createElement('p');
var p_email = document.createElement('p');
var p_address = document.createElement('p');
var p_phone = document.createElement('p');
var p_website = document.createElement('p');
var p_company = document.createElement('p');
p_id.innerText = user.id + ')';
p_name.innerText = 'Name: ' + user.name;
p_username.innerText = 'UserName: ' + user.username;
p_email.innerText = 'Email: ' + user.email;
p_address.innerText = "Adress:\n      Street: ".concat(user.address.street, ",\n      Suite: ").concat(user.address.suite, ",\n      City: ").concat(user.address.city, ",\n      Zipcode: ").concat(user.address.zipcode, ",\n      Geo:\n            Lat: ").concat(user.address.geo.lat, ",\n            Lng: ").concat(user.address.geo.lng, ",\n  ");
p_phone.innerText = 'Phone: ' + user.phone;
p_website.innerText = 'Website: ' + user.website;
p_company.innerText = "Company:\n      Name: ".concat(user.company.name, ",\n      Catch Phrase: ").concat(user.company.catchPhrase, ",\n      BS: ").concat(user.company.bs);
var userDetailsContainer = document.createElement('div');
userDetailsContainer.id = 'user-details';
userDetailsContainer.appendChild(p_id);
userDetailsContainer.appendChild(p_name);
userDetailsContainer.appendChild(p_username);
userDetailsContainer.appendChild(p_email);
userDetailsContainer.appendChild(p_address);
userDetailsContainer.appendChild(p_phone);
userDetailsContainer.appendChild(p_website);
userDetailsContainer.appendChild(p_company);
document.body.appendChild(userDetailsContainer);
// https://jsonplaceholder.typicode.com/users/USER_ID/posts
var viewMoreButton = document.createElement('button');
viewMoreButton.innerText = 'Post of current user';
viewMoreButton.id = 'view-more-button';
viewMoreButton.addEventListener('click', function () {
    fetch("https://jsonplaceholder.typicode.com/users/".concat(user.id, "/posts"))
        .then(function (value) { return value.json(); })
        .then(function (json) {
        var div_i = 1;
        var div_2row;
        for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
            var jsonElement = json_1[_i];
            var postContainer = document.createElement('div');
            postContainer.classList.add('post-container');
            var a = document.createElement('a');
            a.innerText = "".concat(jsonElement.title);
            a.href = './post-details.html?value=' + JSON.stringify(jsonElement);
            postContainer.appendChild(a);
            if (div_i % 5 === 1) {
                div_2row = document.createElement('div');
            }
            div_2row.appendChild(postContainer);
            if (div_i % 2 === 0) {
                div_2row.classList.add('div2row');
                document.body.appendChild(div_2row);
            }
            div_i++;
        }
    });
});
userDetailsContainer.appendChild(viewMoreButton);
document.body.appendChild(userDetailsContainer);
