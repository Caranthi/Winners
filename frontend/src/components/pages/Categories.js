import React from "react";
import consts from '../../consts.json';

import '../../styles/pages/Categories.css';
import { useParams } from "react-router-dom";
import ThematicCategories from "../organisms/ThematicCategories";
const Categories = () => {
    const {year} = useParams();
    const gamingTitle = "Gaming";
    const cinemaTitle = "Kinematografia";
    const otherTitle = "Inne";
    const gamingCategories = ["Zachwyt wizualny", "Sound Design", "Performance growy", "Gra", "Muzyka growa"];
    const cinemaCategories = ["Serial", "Muzyka Serialowa", "Film", "Muzyka Filmowa", "Performance Kinematograficzny", "Purr Cinema"];
    const otherCategories = ["Książka", "Piosenka"];

    return(

        <div className="Categories">
            <a className="title">{consts.CONSTS.TITLE}</a>
            <ThematicCategories year={year} title={gamingTitle} categories={gamingCategories}/>
            <ThematicCategories year={year} title={cinemaTitle} categories={cinemaCategories}/>
            <ThematicCategories year={year} title={otherTitle} categories={otherCategories}/>
        </div>
    );
};

export default Categories;