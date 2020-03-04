import React from "react";
import StyleLabel from "./index.style";

const Label = ({ title = "-", onCloseLabel = () => {} }) => {
    const eventOnClickCloseLabel = (e, title) => {
        e.preventDefault();
        onCloseLabel(title);
    };
    return (
        <StyleLabel>
            <div className="label">
                <div className="label__text">{title}</div>
                <button
                    onClick={e => eventOnClickCloseLabel(e, title)}
                    type="button"
                    className="label__close"
                >
                    X
                </button>
            </div>
        </StyleLabel>
    );
};

export default Label;
