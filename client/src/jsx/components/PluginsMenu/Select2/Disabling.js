import React, { useState } from "react";
import Select from "react-select";

const options = [
   { value: "chocolate", label: "Chocolate" },
   { value: "strawberry", label: "Strawberry", isDisabled: true },
   { value: "vanilla", label: "Vanilla" },
];
const Disabling = () => {
   const [selectedOption, setSelectedOption] = useState(null);
   return (
      <div>
         <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            style={{
               lineHeight: "40px",
               color: "#7e7e7e",
               paddingLeft: " 15px",
            }}
         />
      </div>
   );
};

export default Disabling;
