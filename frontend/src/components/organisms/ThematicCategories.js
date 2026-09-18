import React from "react";
import consts from '../../consts.json';
import SeparationLine from '../atoms/SeparationLine.js';

import '../../styles/organisms/ThematicCategories.css';
import Thumbnail from "../atoms/Thumbnail.js";
const ThematicCategories = ({ year, person, title, categories }) => {

    return (

        <div className="ThematicCategories">
            <SeparationLine />
            <a className="subTitle">{title}</a>
            <div className="thumbnailRow">
                {categories.map((category) => (
                    <Thumbnail key={category} year={year} person={person} category={category} />
                ))}
            </div>
        </div>
    );
};

export default ThematicCategories;