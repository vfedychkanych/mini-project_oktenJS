fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (value) { return value.json(); })
    .then(function (json) {
    var div_i = 1;
    var div_2row;
    for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
        var jsonElement = json_1[_i];
        var div = document.createElement('div');
        var a = document.createElement('a');
        a.innerText = "".concat(jsonElement.id, ") ").concat(jsonElement.name);
        a.href = './user-details.html?value=' + JSON.stringify(jsonElement);
        div.appendChild(a);
        if (div_i % 2 !== 0) {
            div_2row = document.createElement('div');
        }
        div_2row.appendChild(div);
        if (div_i % 2 === 0) {
            div_2row.classList.add('div2row');
            document.body.appendChild(div_2row);
        }
        div_i++;
    }
});
