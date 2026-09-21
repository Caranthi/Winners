import React from "react";
import consts from '../../consts.json';
import { useNavigate } from "react-router-dom";

import '../../styles/atoms/Thumbnail.css';
const Thumbnail = ({ person, year, category, small, hideImage }) => {
    const navigate = useNavigate();

    const moveToDetails = () => {
        navigate(`/details/${person}/${year}/${category}`);
    };

    return (
        <div className="Thumbnail" onClick={moveToDetails}>
            <img
                className={`image${small ? " small" : ""}`}
                src={hideImage ? "/images/placeholder.jpg" : `/images/${person}/${year}/${category}.jpg`}
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