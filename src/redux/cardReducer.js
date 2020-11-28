import { ADD_CARD, DELETE_CARD, UPDATE_CARD, CHOOSE_CARD, RESET_CARD } from "./constants";

const cards = [];

export function cardReducer(state = cards, action) {
    let newCards;

    switch (action.type) {
        case ADD_CARD:
            newCards = [...state];
            newCards.push(action.payload);
            return newCards;
        case DELETE_CARD:
            newCards = [...state];
            newCards = newCards.filter(card => card.id != action.payload);
            return newCards;
        case UPDATE_CARD:
            let index = -1;
            newCards = [...state];

            for (let i = 0; i < newCards.length; i++) {
                if (newCards[i].id === action.payload.id) {
                    index = i;
                    break;
                }
            }

            action.payload.empty = false;

            if (index !== -1) {
                newCards[index] = action.payload;
            }

            return newCards;
        case CHOOSE_CARD:
            newCards = [...state];
            newCards.map(card => {
                if (card.chosen && card.id == action.payload) {
                    card.chosen = false;
                }
                else {
                    card.id === action.payload ? card.chosen = true : card.chosen = false;
                }
            });
            return newCards;
        case RESET_CARD:
            newCards = [...state];
            newCards.map(card => card.id == action.payload ? card.empty = true : card.empty = false)
            return newCards;
        default:
            return state;
    }
}