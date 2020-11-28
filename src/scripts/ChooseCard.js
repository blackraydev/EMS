export default function ChooseCard(id) {
    const allCards       = document.querySelectorAll(".small-card"),
          fullCard       = document.querySelector(".full-card"),
          deleteBtn      = document.querySelector(".delete-card"),
          hideLabelRight = document.querySelector(".choose-emp");

    for (let i = 0; i < allCards.length; i++) {
        if (allCards[i].getAttribute("id") == id) {
            if (allCards[i].classList.contains("small-card-active")) {
                fullCard.classList.remove("full-card-active");
                hideLabelRight.classList.remove("choose-emp-hidden");
                deleteBtn.classList.add("delete-card-off");
            }
            else {
                fullCard.classList.add("full-card-active");
                hideLabelRight.classList.add("choose-emp-hidden");
                deleteBtn.classList.remove("delete-card-off");
            }

            allCards[i].classList.toggle("small-card-active");
            allCards[i].classList.add("small-card-anim");
        }
        else {
            allCards[i].classList.remove("small-card-active");
        }
    }
}