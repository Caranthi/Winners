import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import consts from '../../consts.json';

import '../../styles/pages/WinnerDetails.css';
const WinnerDetails = () => {
    const { person, year, category } = useParams();
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/${person.toLowerCase()}/${category}/${year}`)
            .then((response) => response.json())
            .then((data) => setWinner(data));
    }, [person, year, category]);

    return (
        <div className="WinnerDetails">
            <a className="title">{winner?.title}</a>
            <div className="content">
                <img
                    className="detailsImage"
                    src={`/images/${person}/${year}/${category}.jpg`}
                    alt=""
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder.jpg";
                    }}
                />
                <p className="description">{winner?.description}</p>
            </div>
        </div>
    );
};

export default WinnerDetails;
