import React from "react";
import consts from '../../consts.json';
import Tile from './Tile.js';

import '../../styles/atoms/TileRow.css';
const TileRow = ({years}) => {

    return(

        <div className="TileRow">
            {years.map(year => (
                <Tile value={year} key={year}/>
            ))}
        </div>
    );
};

export default TileRow;