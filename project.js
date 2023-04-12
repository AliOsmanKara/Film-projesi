const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


const ui = new UI();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
}
function addFilm(e) {
    e.preventDefault();
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {

        ui.displayMessages("Fill All Fields...", "danger");
    }
    else {
        const newFilm = new Film(title, director, url);


        ui.addFilmToUI(newFilm);
        ui.displayMessages("The movie has been successfully added...", "success");
    }
    ui.clearInputs(titleElement, directorElement, urlElement);
}