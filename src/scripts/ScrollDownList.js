export default function ScrollDownList() {
    const cardList = document.querySelector(".card-list");

    setTimeout(function scrollDown() {
        cardList.scrollTop = cardList.scrollHeight
    }, 0);
}