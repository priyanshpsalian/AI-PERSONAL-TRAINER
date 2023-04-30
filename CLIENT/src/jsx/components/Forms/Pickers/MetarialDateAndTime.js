import React, { useState } from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function BasicDateAndTimePicker(props) {
   const [selectedDate, handleDateChange] = useState(new Date());

   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <DateTimePicker
            label=""
            inputVariant="outlined"
            value={selectedDate}
            onChange={handleDateChange}
         />
      </MuiPickersUtilsProvider>
   );
}

export default BasicDateAndTimePicker;
