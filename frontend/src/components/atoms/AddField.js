import React, { useState } from "react";

import '../../styles/atoms/AddField.css';
const AddField = ({ placeholder, onSave, className, multiline }) => {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");

    const save = () => {
        setEditing(false);
        if (draft.trim()) {
            onSave(draft.trim());
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

    return (
        <a className={`AddField placeholder ${className}`} onClick={() => setEditing(true)}>
            + {placeholder}
        </a>
    );
};

export default AddField;
