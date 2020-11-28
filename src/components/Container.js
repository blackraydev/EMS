import React from "react";
import { useSelector } from "react-redux";
import FullCard from "./FullCard";
import SmallCard from "./SmallCard";

const Container = () => {
    let cards = useSelector(state => state.cards);

    return(
        <div className="container">
            <div className="card-list">
                <h1 className="add-emp">Добавьте сотрудника</h1>
                { 
                    cards.map(card => {
                        return(
                            <SmallCard
                                id={card.id}
                                fio={card.fio}
                                position={card.position}
                                birthDate={card.birthDate}
                                sex={card.sex}
                                fired={card.fired}
                            />
                        )
                    })
                }
            </div>
            <div className="card-editting">
                <h1 className="choose-emp">Выберите сотрудника</h1>
                <FullCard />
            </div>
        </div>
    );
}

export default Container;