import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

// begin style react datepicker from node modules
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
// end style react datepicker from node modules

import StyleDatePicker from "./index.style";

const DatePicker = ({
    showTimeSelect = false,
    dateFormat = "yyyy-MM-dd",
    showMonthDropdown = false,
    label = false,
    name = "date-picker",
    minDate = new Date(),
    onGetValue = () => {},
}) => {
    const [startDate, setStartDate] = useState(new Date());
    const eventOnChangeDate = value => {
        setStartDate(value);
        onGetValue({
            name,
            value,
        });
    };
    return (
        <StyleDatePicker>
            {label && <label htmlFor={name}>{label}</label>}
            <ReactDatePicker
                name={name}
                showMonthDropdown={showMonthDropdown}
                minDate={minDate}
                dateFormat={dateFormat}
                showTimeSelect={showTimeSelect}
                selected={startDate}
                onChange={eventOnChangeDate}
            ></ReactDatePicker>
        </StyleDatePicker>
    );
};

export default DatePicker;
