import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const COLORS = ["red", "green", "blue"];
const colors = [0, 0, 0];

class NonlinerSlider extends React.Component {
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

   onSlide = (render, handle, value, un, percent) => {
      this.setState({
         textValue: value[0].toFixed(2),
         percent: percent[0].toFixed(2),
      });
   };
   render() {
      const { textValue, percent } = this.state;
      return (
         <div className="slider" id="NonlinerSlider">
            <Nouislider
               connect
               start={[20, 80]}
               behaviour="tap"
               range={{
                  min: [0],
                  max: [100],
               }}
               onSlide={this.onSlide}
            />
            {textValue && percent ? (
               <div>
                  {textValue} {percent}
               </div>
            ) : (
               <div>
                  {20.0} {80.0}
               </div>
            )}
         </div>
      );
   }
}

export default NonlinerSlider;
