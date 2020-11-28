import { ADD_CARD, DELETE_CARD, UPDATE_CARD, CHOOSE_CARD, RESET_CARD, EDIT_DATA } from "./constants";

export function addCard(card) {
    return {
        type: ADD_CARD,
        payload: card
    }
}

export function deleteCard(cardId) {
    return {
        type: DELETE_CARD,
        payload: cardId
    }
}

export function updateCard(card) {
    return {
        type: UPDATE_CARD,
        payload: card
    }
}

export function chooseCard(cardId) {
    return {
        type: CHOOSE_CARD,
        payload: cardId
    }
}

export function resetCard(cardId) {
    return {
        type: RESET_CARD,
        payload: cardId
    }
}

export function editData(card) {
    return {
        type: EDIT_DATA,
        payload: card
    }
}