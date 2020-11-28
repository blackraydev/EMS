export default function ToggleWarning(flag) {
    const warning = document.querySelector(".warning");

    if (flag) {
        warning.classList.add("warning-active");
    }
    else {
        warning.classList.remove("warning-active");
    }
}