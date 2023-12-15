import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class Disabling extends React.Component {
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
   changeDisabled = () => {
      this.setState((prevState) => ({ disabled: !prevState.disabled }));
   };
   render() {
      const { disabled } = this.state;
      return (
         <div className="slider" id="Disabling">
            <Nouislider
               disabled={disabled}
               start={40}
               range={{
                  min: 0,
                  max: 100,
               }}
            />
            <label>
               <input
                  className="mr-1"
                  type="checkbox"
                  id="checkbox1"
                  onClick={this.changeDisabled}
               />
               Disable slider
            </label>
         </div>
      );
   }
}

export default Disabling;
