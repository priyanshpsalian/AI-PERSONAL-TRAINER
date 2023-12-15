import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function BasicDatePicker(props) {
   const [selectedDate, handleDateChange] = useState(new Date());

   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <DatePicker
            autoOk
            label=""
            clearable
            format="dd/MM/yyyy"
            disableFuture
            value={selectedDate}
            onChange={handleDateChange}
         />
      </MuiPickersUtilsProvider>
   );
}

export default BasicDatePicker;
