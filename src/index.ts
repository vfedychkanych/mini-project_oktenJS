fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
    .then((json) => {
        let div_i = 1;
        let div_2row: HTMLDivElement;
        for (const jsonElement of json) {
            let div = document.createElement('div');
            let a = document.createElement('a');
            a.innerText = `${jsonElement.id}) ${jsonElement.name}`;
            a.href = './user-details.html?value=' + JSON.stringify(jsonElement);
            div.appendChild(a);

            if (div_i % 2 !== 0) {
                div_2row = document.createElement('div');
            }

            div_2row.appendChild(div);

            if (div_i % 2 === 0 ) {
                div_2row.classList.add('div2row');
                document.body.appendChild(div_2row);
            }

            div_i++;
        }
    });