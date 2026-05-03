import React from "react";
import consts from '../../consts.json';

import '../../styles/organisms/Choice.css';
const Choice = ({value}) => {

    return(
        <div className="Choice">
            <a className="title">{value}</a>
        </div>
    );
};

export default Choice;