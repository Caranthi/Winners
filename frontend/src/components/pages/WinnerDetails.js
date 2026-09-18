import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import consts from '../../consts.json';
import AddField from "../atoms/AddField.js";

import '../../styles/pages/WinnerDetails.css';
const WinnerDetails = () => {
    const { person, year, category } = useParams();
    const [winner, setWinner] = useState(null);

    const apiUrl = `http://localhost:3001/${person.toLowerCase()}/${category}/${year}`;

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setWinner(data));
    }, [apiUrl]);

    const saveField = (field, value) => {
        fetch(apiUrl, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ [field]: value })
        })
            .then((response) => response.json())
            .then((updated) => setWinner(updated));
    };

    if (!winner) {
        return null;
    }

    return (
        <div className="WinnerDetails">
            {winner.title
                ? <a className="title">{winner.title}</a>
                : <AddField className="title" placeholder="Dodaj tytuł" onSave={(value) => saveField("title", value)} />}
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
                <div className="details">
                    {winner.description
                        ? <p className="description">{winner.description}</p>
                        : <AddField className="description" placeholder="Dodaj opis" multiline onSave={(value) => saveField("description", value)} />}
                    {winner.url
                        ? <a className="url" href={winner.url} target="_blank" rel="noreferrer">{winner.url}</a>
                        : <AddField className="url" placeholder="Dodaj link" onSave={(value) => saveField("url", value)} />}
                </div>
            </div>
        </div>
    );
};

export default WinnerDetails;
