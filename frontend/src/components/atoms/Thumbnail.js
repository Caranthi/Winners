import React from "react";
import consts from '../../consts.json';

import '../../styles/atoms/Thumbnail.css';
const Thumbnail = ({person, year, category}) =>
{
    return(
        <div className="Thumbnail">
            <img className="image" src={`/images/${person}/${year}/${category}.jpg`} alt="" />
            <p className="label">{consts.VARIABLES.CATEGORY_LABELS[category]}</p>
        </div>
    );
};

export default Thumbnail;