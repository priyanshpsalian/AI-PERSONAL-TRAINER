import React, { useState } from "react";
import { SketchPicker } from "react-color";
import { GradientPickerPopover } from "react-linear-gradient-picker";

const rgbToRgba = (rgb, a = 1) =>
   rgb.replace("rgb(", "rgba(").replace(")", `, ${a})`);

const WrappedSketchPicker = ({ onSelect, ...rest }) => {
   return (
      <SketchPicker
         {...rest}
         color={rgbToRgba(rest.color, rest.opacity)}
         onChange={(c) => {
            const { r, g, b, a } = c.rgb;
            onSelect(`rgb(${r}, ${g}, ${b})`, a);
         }}
      />
   );
};

const initialPallet = [
   { offset: "0.00", color: "rgb(238, 241, 11)" },
   { offset: "1.00", color: "rgb(126, 32, 207)" },
];

const Gradient = () => {
   const [open, setOpen] = useState(false);
   const [angle, setAngle] = useState(90);
   const [palette, setPalette] = useState(initialPallet);

   return (
      <GradientPickerPopover
         {...{
            open,
            setOpen,
            angle,
            setAngle,
            showAnglePicker: true,
            width: 220,
            maxStops: 3,
            paletteHeight: 32,
            palette,
            onPaletteChange: setPalette,
         }}
      >
         <WrappedSketchPicker />
      </GradientPickerPopover>
   );
};

export default Gradient;
