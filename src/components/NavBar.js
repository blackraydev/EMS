import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, chooseCard, deleteCard, editData } from "../redux/actions";
import ChooseCard from "../scripts/ChooseCard";
import ToggleText from "../scripts/ToggleText";
import ToggleAddBtn from "../scripts/ToggleAddBtn";
import ClearErrors from "../scripts/ClearErrors";
import ScrollDownList from "../scripts/ScrollDownList";
import ToggleWarning from "../scripts/ToggleWarning";

const NavBar = () => {
    let cards = useSelector(state => state.cards);
    let dispatch = useDispatch();
    let targetCard = cards.find(card => card.chosen);
    let isEmpty = cards.some(card => card.empty);

    if (isEmpty) {
        ToggleAddBtn(true);
    }

    const emptyCard = {
        id: Math.ceil(Math.random() * 100000),
        fio: "",
        position: "",
        birthDate: "",
        sex: "",
        fired: false,
        chosen: false,
        empty: true
    }

    const emptyData = {
        ...emptyCard,
        position: "Junior Frontend Developer",
    }

    const addHandler = () => {
        if (!isEmpty) {
            dispatch(editData(emptyData));
            dispatch(addCard(emptyCard));
            dispatch(chooseCard(emptyCard.id));

            setTimeout(() => {
                ToggleText(true);
                ChooseCard(emptyCard.id);
            }, 0);
        }
        else {
            ToggleWarning(true);
        }

        ScrollDownList();
    }

    const deleteHandler = () => {
        if (targetCard) {
            if (cards.length == 1) {
                ToggleText(false);
            }
            
            dispatch(deleteCard(targetCard.id));
            ChooseCard(targetCard.id);
            ToggleAddBtn(false);
        }

        ClearErrors();
    }

    return(
        <nav className="navbar">
            <button onClick={addHandler} className="add-card">
                <h3>Добавить сотрудника</h3>
            </button>
            <button onClick={deleteHandler} className="delete-card delete-card-off">
                <h3>Удалить сотрудника</h3>
            </button>
        </nav>
    );
}

export default NavBar;