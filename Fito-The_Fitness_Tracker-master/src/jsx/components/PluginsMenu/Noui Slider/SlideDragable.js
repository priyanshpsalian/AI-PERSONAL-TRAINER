import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class SlideDragable extends React.Component {
   render() {
      return (
         <div className="slider" id="SlideDragable">
            <Nouislider
               connect
               start={[20, 80]}
               behaviour="tap"
               snap
               range={{
                  min: [0],
                  "10%": 30,
                  "20%": 40,
                  "30%": 50,
                  "50%": 60,
                  "60%": 70,
                  "70%": 80,
                  "90%": 90,
                  max: [100],
               }}
            />
         </div>
      );
   }
}

export default SlideDragable;
