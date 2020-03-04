import PropTypes from "prop-types";

export const defaultPropsType = {
    title: "-",
};

export const interFace = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
