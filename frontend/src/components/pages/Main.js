import React from "react";
import consts from '../../consts.json';

import '../../styles/pages/Main.css';
import Choice from "../organisms/Choice";
const Main = () =>
{
    const titleText = 'BEST OF THE YEAR';

    return (
        <div className="Main">
            <a className="title">{titleText}</a>
            <div className="choice">
                <Choice value="R"/>
                <Choice value="M"/>
            </div>
        </div>
    );
};

export default Main;