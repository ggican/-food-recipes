import React from "react";
import PropTypes from "prop-types";

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

Label.defaultProps = {
    title: "-",
    onCloseLabel: () => {},
};

Label.propTypes = {
    /**
      Use title for label components by default is '-'
      */
    title: PropTypes.string.isRequired,
    /**
      Use onCloseLabel for close label components
      */
    onCloseLabel: PropTypes.func.isRequired,
};

export default Label;
