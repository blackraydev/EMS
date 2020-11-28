export default function() {
    const fio       = document.querySelector(".fio input"),
          birthDate = document.querySelector(".birth-date input"),
          warning   = document.querySelector(".warning");

    warning.classList.remove("warning-active");
    fio.classList.remove("fio-error");
    birthDate.classList.remove("input-error");
}