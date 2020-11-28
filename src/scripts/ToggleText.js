export default function ToggleText(flag) {
    const text = document.querySelector(".add-emp");

    if (flag) {
        text.classList.add("add-emp-hidden");
        
        setTimeout(() => {
            text.style.display = "none";
        }, 250);
    }
    else {
        text.style.display = "unset";

        setTimeout(() => {
            text.classList.remove("add-emp-hidden");
        }, 0);
    }
}