import React from "react";
import Nouislider from "nouislider-react";
import "./style.css";

class Toggle extends React.Component {
   render() {
      return (
         <Nouislider
            id="slider-toggle"
            orientation="vertical"
            start={0}
            range={{
               min: [0, 1],
               max: 1,
            }}
         />
      );
   }
}

export default Toggle;
