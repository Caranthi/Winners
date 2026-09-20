import React, { useRef } from "react";
import AddField from "./AddField.js";

import '../../styles/atoms/CaptionedImage.css';
const CaptionedImage = ({ captionValue, captionPlaceholder, onSaveCaption, src, onUpload }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        e.target.value = "";
        if (file) {
            onUpload(file);
        }
    };

    return (
        <div className="CaptionedImage">
            <AddField className="caption" value={captionValue} placeholder={captionPlaceholder} onSave={onSaveCaption} />
            <img
                src={src}
                alt=""
                onClick={() => fileInputRef.current?.click()}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/placeholder.jpg";
                }}
            />
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default CaptionedImage;
