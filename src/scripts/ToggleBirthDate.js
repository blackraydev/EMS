export default function ToggleBirthDate(flag) {
    const birthDate = document.querySelector(".birth-date input");

    if (flag) {
        birthDate.classList.add("input-error");
    }
    else {
        birthDate.classList.remove("input-error");
    }
}