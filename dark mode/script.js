const body = document.querySelector("#body");
const btn = document.querySelector("#mode");
let check = 0;

btn.addEventListener("click", () => {
    if (check == 0) {
        body.style.backgroundColor = "#36454F";
        body.style.color = "white";
        btn.innerHTML = `White mode`;
        btn.style.backgroundColor="white";
        check = 1;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        btn.innerHTML = `Dark mode`;
        btn.style.backgroundColor="grey";
        check = 0;
    }
});
