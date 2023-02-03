let article = document.querySelector('article');
fetch("https://api.github.com/users")
.then(res => {
        res
            .json()
                .then(data =>{
                    data.map(value =>{
                            let {avatar_url, login, html_url} = value;
                        article.innerHTML += `
                        <div class="card">
                            <img src=${avatar_url} alt=""/>
                            <h2>${login}</h2>
                            <a href=${html_url}>Goto Profile</a>
                        </div>
                        `;
                    });
                })
                .catch(err => console.log(err));
})
.catch(err => console.log(err))
.finally(() =>console.log("server responded "));
let card = document.querySelector(".card");