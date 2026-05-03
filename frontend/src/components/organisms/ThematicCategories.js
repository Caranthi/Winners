import React from "react";
import consts from '../../consts.json';
import SeparationLine from '../atoms/SeparationLine.js';

import '../../styles/organisms/ThematicCategories.css';
const ThematicCategories = ({year, title, categories}) => {

    return(

        <div className="ThematicCategories">
            <SeparationLine/>
            <a className="subTitle">{title}</a>
        </div>
    );
};

export default ThematicCategories;