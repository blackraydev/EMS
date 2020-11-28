import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseCard, editData } from "../redux/actions";
import ChooseCard from "../scripts/ChooseCard";
import ToggleWarning from "../scripts/ToggleWarning";

const SmallCard = (props) => {
    let dispatch = useDispatch();
    let cards = useSelector(state => state.cards);
    let isEmpty = cards.some(card => card.empty);

    const handleClick = () => {
        if (!isEmpty) {
            const card = {
                fio: props.fio,
                position: props.position,
                birthDate: props.birthDate,
                sex: props.sex,
                fired: props.fired
            };

            dispatch(editData(card));
            dispatch(chooseCard(props.id));
            ChooseCard(props.id);
        }
        else {
            ToggleWarning(true);
        }
    }

    return(
        <div onClick={() => handleClick()} id={props.id} className="small-card">
            <div className="fio">
                <h3>{ props.fio ? props.fio : "Не указано"}</h3>
            </div>
            <div className="column">
                <p>Должность: <b>{ props.position ? props.position : "Не указано" }</b></p>
                <p>Дата рождения: <b>{ props.birthDate ? props.birthDate : "Не указано" }</b></p>
                <p>Пол: <b>{ props.sex ? props.sex : "Не указано" }</b></p>
                <p><b>{ props.fired ? "Уволен" : "Не уволен"}</b> </p>
            </div>
        </div>
    );
}

export default SmallCard;