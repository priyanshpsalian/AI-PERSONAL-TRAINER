import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class ClickAblePips extends React.Component {
   state = {
      color: "rgb(127, 127, 127)",
      textValue: null,
      percent: null,
      value: 0,
      disabled: false,
      range: {
         min: 0,
         max: 100,
      },
      ref: null,
   };
   onSkipSlide = (render, handle, value, un, percent) => {
      this.setState({
         skippingValue: value[0],
      });
   };

   render() {
      return (
         <div className="slider" id="ClickAblePips">
            <Nouislider
               start={[1000]}
               pips={{ mode: "count", values: 5 }}
               clickablePips
               range={{
                  min: 0,
                  max: 1000,
               }}
            />
         </div>
      );
   }
}

export default ClickAblePips;
