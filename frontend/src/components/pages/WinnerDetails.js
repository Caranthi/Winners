import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import consts from '../../consts.json';
import AddField from "../atoms/AddField.js";

import '../../styles/pages/WinnerDetails.css';
const WinnerDetails = () => {
    const { person, year, category } = useParams();
    const [winner, setWinner] = useState(null);
    const [imageVersion, setImageVersion] = useState(0);
    const fileInputRef = useRef(null);
    const urlSource = category === "book" ? "Link do Lubimy Czytać: " : "";
    const videoCategories = ["song", "game", "game_music", "sound_design"];
    const isVideoCategory = videoCategories.includes(category);
    const showDescription = category !== "song";

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

    const getYoutubeEmbedUrl = (url) => {
        try {
            const parsed = new URL(url);
            if (parsed.hostname.includes("youtu.be")) {
                return `https://www.youtube.com/embed${parsed.pathname}`;
            }
            const videoId = parsed.searchParams.get("v");
            return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
        } catch {
            return null;
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        e.target.value = "";
        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("image", file);

        fetch(`http://localhost:3001/upload/${person}/${category}/${year}`, {
            method: "POST",
            body: formData
        }).then(() => setImageVersion((version) => version + 1));
    };

    return (
        <div className="WinnerDetails">
            <AddField className="title" value={winner.title} placeholder="Dodaj tytuł" onSave={(value) => saveField("title", value)} />
            <div className="content">
                <img
                    className="detailsImage"
                    src={`/images/${person}/${year}/${category}.jpg?v=${imageVersion}`}
                    alt=""
                    onClick={() => fileInputRef.current?.click()}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/placeholder.jpg";
                    }}
                />
                <input
                    className="imageUpload"
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
                <div className={`details${category === "song" ? " centeredDetails" : ""}`}>
                    {showDescription && (
                        <AddField className="description" value={winner.description} placeholder="Dodaj opis" multiline onSave={(value) => saveField("description", value)} />
                    )}
                    {winner.url
                        ? isVideoCategory
                            ? (
                                <iframe
                                    className="youtube"
                                    src={getYoutubeEmbedUrl(winner.url)}
                                    title={winner.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )
                            : (
                                <p className="urlRow">
                                    {urlSource && <span className="urlSource">{urlSource}</span>}
                                    <a className="url" href={winner.url} target="_blank" rel="noreferrer">{winner.url}</a>
                                </p>
                            )
                        : <AddField className="url" placeholder="Dodaj link" onSave={(value) => saveField("url", value)} />}
                </div>
            </div>
        </div>
    );
};

export default WinnerDetails;
