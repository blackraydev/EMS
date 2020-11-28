export default function ToggleAddBtn(flag) {
    const addBtn = document.querySelector(".add-card");

    if (flag) {
        addBtn.classList.add("add-card-off");
    }
    else {
        addBtn.classList.remove("add-card-off");
    }
}