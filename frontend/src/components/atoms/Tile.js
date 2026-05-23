import React from "react";
import consts from '../../consts.json';

import { useNavigate } from "react-router-dom";

import '../../styles/atoms/Tile.css';
const Tile = ({value, person}) =>{
    const navigate = useNavigate();

    const moveToYear = () =>
    {
        navigate(`/categories/${person}/${value}`);
    };

    return(
        <div className="Tile" onClick={moveToYear}>
            <a>{value}</a>
        </div>
    )
};

export default Tile;