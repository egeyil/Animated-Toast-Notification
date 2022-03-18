const button = document.querySelector("button");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progressBar = document.querySelector(".progress");

button.addEventListener("click", () => {
    toast.classList.add("active");
    progressBar.classList.add("active");
});

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    progressBar.classList.remove("active");
});

