import { EDIT_DATA } from "./constants";

const initialState = {
    fio: "",
    position: "Junior Frontend Developer",
    birthDate: "",
    sex: "",
    fired: false
}

export function editReducer(state = initialState, action) {
    if (action.type === EDIT_DATA) {
        const card = action.payload;
        
        return { 
            ...state,
            id: card.id, 
            fio: card.fio,
            position: card.position,
            birthDate: card.birthDate,
            sex: card.sex,
            fired: card.fired,
            chosen: card.chosen,
            empty: card.empty
        };
    }

    return state;
}