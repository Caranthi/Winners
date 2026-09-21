import React from "react";
import consts from '../../consts.json';

import '../../styles/pages/Categories.css';
import { useParams } from "react-router-dom";
import ThematicCategories from "../organisms/ThematicCategories";
import { useHideImages } from "../../context/HideImagesContext";
const Categories = () => {
    const { year } = useParams();
    const { person } = useParams();
    const { hideImages, setHideImages } = useHideImages();
    const gamingTitle = "Gaming";
    const cinemaTitle = "Kinematografia";
    const otherTitle = "Inne";
    const gamingCategories = consts.VARIABLES.GAMING_CATEGORIES;
    const cinemaCategories = consts.VARIABLES.CINEMA_CATEGORIES;
    const otherCategories = consts.VARIABLES.OTHER_CATEGORIES;

    return (

        <div className="Categories">
            <a className="title">{consts.CONSTS.TITLE}</a>
            <div className="hideToggle" onClick={() => setHideImages(!hideImages)}>
                <span>Ukryj</span>
                <div className={`hideToggleBox${hideImages ? " checked" : ""}`} />
            </div>
            <ThematicCategories year={year} person={person} title={gamingTitle} categories={gamingCategories} hideImages={hideImages} />
            <ThematicCategories year={year} person={person} title={cinemaTitle} categories={cinemaCategories} hideImages={hideImages} />
            <ThematicCategories year={year} person={person} title={otherTitle} categories={otherCategories} smallThumbnails hideImages={hideImages} />
        </div>
    );
};

export default Categories;