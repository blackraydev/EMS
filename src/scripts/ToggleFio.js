export default function ToggleFio(flag) {
    const fio = document.querySelector(".fio input");

    if (flag) {
        fio.classList.add("fio-error");
    }
    else {
        fio.classList.remove("fio-error");
    }
}