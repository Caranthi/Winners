import React from "react";
import consts from '../../consts.json';

import '../../styles/atoms/Tile.css';
const Tile = ({value}) =>{

    return(
        <div className="Tile">
            <a>{value}</a>
        </div>
    )
};

export default Tile;