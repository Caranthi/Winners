import React, { useEffect, useState } from "react";
import consts from '../../consts.json';

import '../../styles/organisms/Choice.css';
import TileRow from "../atoms/TileRow";
const Choice = ({value}) => {
    const [years, setYears] = useState([]);

    const sliceYears = () => {
        const result = []
        for(let year = 0; year < consts.VARIABLES.YEARS.length; year+=3)
        {
            result.push(consts.VARIABLES.YEARS.slice(year, year + 3));
        }

        setYears(result);
    };

    useEffect(() =>
    {
        sliceYears();
    }, [])

    return(
        <div className="Choice">
            <a className="title">{value}</a>
            {years.map(yearsSlice => (
                <TileRow years={yearsSlice} key={yearsSlice}/>
            ))}
        </div>
    );
};

export default Choice;