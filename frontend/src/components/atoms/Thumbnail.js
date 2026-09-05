import React from "react";

import '../../styles/atoms/Thumbnail.css';
const Thumbnail = ({person, year}) =>
{
    let testTitle = 'tmp';

    return(
        <div className="Thumbnail">
            <img className="image" src="/images/R/book/2018.jpg" alt="" />
            <p className="label">{testTitle}</p>
        </div>
    );
};

export default Thumbnail;