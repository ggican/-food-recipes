import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";

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
    const [startDate, setStartDate] = useState(minDate);
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

DatePicker.defaultProps = {
    dateFormat: "yyyy-MM-dd",
    minDate: new Date(),
    name: "date-picker",
    label: false,
    showTimeSelect: false,
    showMonthDropdown: false,
    onGetValue: () => {},
};
DatePicker.propTypes = {
    /**
      Use onGetValue for get `value` from input `DatePicker`  components by default is `date-picker`
      */
    onGetValue: PropTypes.func.isRequired,
    /**
      Use name for setup input `name` `DatePicker` components by default is `date-picker`
      */
    name: PropTypes.string.isRequired,
    /**
      Use label for setup `label` name `DatePicker` components by default is `false`
      */
    label: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /**
      Use show Time Select for setup `select time use` or not `DatePicker` components by default is `false`
      */
    showTimeSelect: PropTypes.bool,
    /**
      Use show Month Dropdown for setup `show Month Dropdown` or not `DatePicker` components by default is `false`
      */
    showMonthDropdown: PropTypes.bool,
    /**
      Use Date Format for setup date format in input `DatePicker` components by  default `yyyy-MM-dd`
      */
    dateFormat: PropTypes.string,
    /**
      Use date for  setup minimal date select `minDate` components by default is `date now`
      */
    minDate: PropTypes.instanceOf(Date),
};

export default DatePicker;
