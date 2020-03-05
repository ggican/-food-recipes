import React from "react";
import Label from "./index";

export default { title: "Components|Label", component: Label };

export const defaultLabel = () => {
    return <Label></Label>;
};

export const defaultLabelWithText = () => {
    return <Label title="title"></Label>;
};
