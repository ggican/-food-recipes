import PropTypes from "prop-types";

export const defaultPropsType = {
    title: "-",
    date: "-",
};

export const interFace = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
};
