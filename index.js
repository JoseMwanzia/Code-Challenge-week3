function fetchData() {
    fetch("db.json")
    .then(res => {
        if (!res.ok) {
            console.log(res);
            throw Error("ERROR")
        }
        return res.json()
    })
    .then(data => {
        console.log(data);
        const html =data.films.map(films => {
            return `
        <div class="user">
            <p> <img src="${films.poster}" alt="${films.title}"/></p>
            <p>Title: ${films.title}</p>
            <p>Runtime: ${films.runtime}</p>
            <p>Showtime: ${films.showtime}</p>
            <p>Available tickets: ${films.capacity - films.tickets_sold} </p>

        </div>
            `
        })
        .join("");
        console.log(html);
        document
        .querySelector("#app")
        .insertAdjacentHTML("afterbegin", html)
    })
    .catch(error => {
        console.log(error)
    })
}
fetchData()