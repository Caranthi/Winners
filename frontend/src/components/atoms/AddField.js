import React, { useState } from "react";

import '../../styles/atoms/AddField.css';
const AddField = ({ value, valuePrefix, placeholder, onSave, className, multiline }) => {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(value || "");

    const startEditing = () => {
        setDraft(value || "");
        setEditing(true);
    };

    const save = () => {
        setEditing(false);
        const trimmed = draft.trim();
        if (trimmed && trimmed !== value) {
            onSave(trimmed);
        }
    };

    if (editing) {
        return multiline ? (
            <textarea
                className={`AddField ${className}`}
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={save}
            />
        ) : (
            <input
                className={`AddField ${className}`}
                autoFocus
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onBlur={save}
                onKeyDown={(e) => e.key === "Enter" && save()}
            />
        );
    }

    if (value) {
        return (
            <a className={className} onClick={startEditing}>
                {valuePrefix}{value}
            </a>
        );
    }

    return (
        <a className={`AddField placeholder ${className}`} onClick={startEditing}>
            + {placeholder}
        </a>
    );
};

export default AddField;
