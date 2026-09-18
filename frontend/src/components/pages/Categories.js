import React from "react";
import consts from '../../consts.json';

import '../../styles/pages/Categories.css';
import { useParams } from "react-router-dom";
import ThematicCategories from "../organisms/ThematicCategories";
const Categories = () => {
    const { year } = useParams();
    const { person } = useParams();
    const gamingTitle = "Gaming";
    const cinemaTitle = "Kinematografia";
    const otherTitle = "Inne";
    const gamingCategories = consts.VARIABLES.GAMING_CATEGORIES;
    const cinemaCategories = consts.VARIABLES.CINEMA_CATEGORIES;
    const otherCategories = consts.VARIABLES.OTHER_CATEGORIES;

    return (

        <div className="Categories">
            <a className="title">{consts.CONSTS.TITLE}</a>
            <ThematicCategories year={year} person={person} title={gamingTitle} categories={gamingCategories} />
            <ThematicCategories year={year} person={person} title={cinemaTitle} categories={cinemaCategories} />
            <ThematicCategories year={year} person={person} title={otherTitle} categories={otherCategories} />
        </div>
    );
};

export default Categories;