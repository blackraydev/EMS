import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { positions } from "../redux/directory";
import { editData, resetCard, updateCard } from "../redux/actions";
import ToggleAddBtn from "../scripts/ToggleAddBtn";
import ToggleWarning from "../scripts/ToggleWarning";
import ToggleFio from "../scripts/ToggleFio";
import TogglePicker from "../scripts/TogglePicker";
import ToggleBirthDate from "../scripts/ToggleBirthDate";

const FullCard = () => {
    const emptyCard = {
        fio: "",
        position: "Junior Frontend Developer",
        birthDate: "",
        sex: "",
        fired: false
    };

    let dispatch = useDispatch();
    let cards = useSelector(state => state.cards);
    let targetCard = cards.find(card => card.chosen) || emptyCard;
    let data = useSelector(state => state.edit);

    const currentCard = { 
        ...targetCard,
        fio: data.fio,
        position: data.position,
        birthDate: data.birthDate,
        sex: data.sex,
        fired: data.fired
     };

    /* Обработчик нажатия кнопки "Сохранить" */
    const updateHandler = () => {
        if (validation()) {
            ToggleAddBtn(false);
            ToggleWarning(false);
            dispatch(updateCard(currentCard));
        }
        else {
            dispatch(resetCard(targetCard.id));
            ToggleWarning(true);
        }
    }

    /* Валидация данных */
    const validation = () => {
        // Проверка поля "ФИО" на валидность
        let valideFio = false;
        let fioValue = data.fio;

        if (fioValue.trim().split(" ").length >= 2) {
            valideFio = true;
        }

        if (!valideFio) {
            ToggleFio(true);
        }
        else {
            ToggleFio(false);
        }

        // Проверка поля "Дата Рождения" на валидность
        let valideBirthDateDot = false;
        let valideBirthDateDash = false;
        let valideBirthDate = false;

        let birthDateValue = data.birthDate;
        
        let numsDot = birthDateValue.split(".");
        let numsDash = birthDateValue.split("-");

        if (numsDot.length === 3 || numsDash.length === 3) {
            valideBirthDateDot = numsDot.every((num, index) => {
                return num.length === 2 && index === 0 && +num >= 1 & +num <= 31 || 
                       num.length === 2 && index === 1 && +num >= 1 & +num <= 12 ||
                       num.length === 4 && index === 2 && +num >= 1920 & +num <= 2020
            })
    
            valideBirthDateDash = numsDash.every((num, index) => {
                return num.length === 4 && index === 0 && +num >= 1920 & +num <= 2020 ||
                        num.length === 2 && index === 1 && +num >= 1 & +num <= 12 ||
                        num.length === 2 && index === 2 && +num >= 1 & +num <= 31;
            })
    
            valideBirthDate = valideBirthDateDot || valideBirthDateDash;
        }

        // Если поле "Дата Рождения" пустое, то оно валидное, так как необязательно к заполнению
        if (!birthDateValue.trim()) {
            valideBirthDate = true;
        }

        if (!valideBirthDate) {
            ToggleBirthDate(true);
        }
        else {
            ToggleBirthDate(false);
        }

        return(valideFio && valideBirthDate);
    }

    return(
        <div className="full-card">
            <p className="warning">Заполните карту сотрудника</p>
            <div className="fio">
                <label>ФИО</label>
                <input
                    onChange={(e) => {
                        currentCard.fio = e.target.value;
                        dispatch(editData(currentCard));
                    }}
                    name="fio" 
                    type="text" 
                    placeholder="Иванов Иван Иванович" 
                    value={data.fio}
                />
            </div>

            <div className="position-picker">
                <div className="position">
                    <label>Должность</label>
                    <a onClick={() => TogglePicker()} href="#">{data.position}</a>
                </div>
                <ul className="submenu">
                    {
                        positions.map(position => 
                            <li 
                                onClick={() => {
                                    currentCard.position = position;
                                    dispatch(editData(currentCard));
                                    TogglePicker();
                                }}
                            >
                                { position }
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="birth-date">
                <label>Дата рождения</label>
                <input
                    onChange={(e) => {
                        currentCard.birthDate = e.target.value;
                        dispatch(editData(currentCard));
                    }}
                    name="birth-date" 
                    type="date" 
                    placeholder="дд.мм.гггг" 
                    value={data.birthDate}
                />
            </div>

            <div className="sex">
                <label>Пол</label>
                <div className="radio-group">
                    <div className="radio-holder">
                        <label>Мужской</label>
                        <input 
                            onClick={(e) => {
                                currentCard.sex = e.target.value;
                                dispatch(editData(currentCard));
                            }}
                            type="radio" 
                            value="Мужской" 
                            name="sex"
                            checked={currentCard.sex === "Мужской"}
                        />
                    </div>
                    <div className="radio-holder">
                        <label>Женский</label>
                        <input 
                            onClick={(e) => {
                                currentCard.sex = e.target.value;
                                dispatch(editData(currentCard));
                            }}
                            type="radio" 
                            value="Женский" 
                            name="sex"
                            checked={currentCard.sex === "Женский"}
                        />
                    </div>
                </div>
            </div>

            <div className="fired">
                <label>Уволен?</label>
                <input 
                    onClick={() => {
                        currentCard.fired = !currentCard.fired;
                        dispatch(editData(currentCard));
                    }} 
                    type="checkbox" 
                    value={data.fired}
                    checked={data.fired}
                />
            </div>

            <button onClick={updateHandler} className="save-changes">Сохранить</button>
        </div>
    );
}

export default FullCard;