import React from "react";
import consts from '../../consts.json';

import '../../styles/atoms/Thumbnail.css';
const Thumbnail = ({ person, year, category, small }) => {
    return (
        <div className="Thumbnail">
            <img
                className={`image${small ? " small" : ""}`}
                src={`/images/${person}/${year}/${category}.jpg`}
                alt=""
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                }}
            />
            <p className="label">{consts.VARIABLES.CATEGORY_LABELS[category]}</p>
        </div>
    );
};

export default Thumbnail;