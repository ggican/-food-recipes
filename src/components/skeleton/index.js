import React from "react";
import StyleSkeleton from "./index.style";

const Skeleton = ({
    width = "100%",
    height = "20px",
    marginBottom = "10px",
    circle = false,
    style = {},
    as = "div",
}) => {
    return (
        <StyleSkeleton
            as={as}
            marginBottom={marginBottom}
            style={{ ...style }}
            width={width}
            height={height}
            circle={circle && "50%"}
        ></StyleSkeleton>
    );
};

export default Skeleton;
