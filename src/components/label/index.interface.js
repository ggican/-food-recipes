import PropTypes from "prop-types";

export const defaultPropsType = {
    title: "-",
    onCloseLabel: () => {},
};

export const interFace = {
    title: PropTypes.string.isRequired,
    onCloseLabel: PropTypes.func.isRequired,
};
