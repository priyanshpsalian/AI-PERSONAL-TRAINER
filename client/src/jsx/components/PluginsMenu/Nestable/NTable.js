import React from "react";
import Nestable from "react-nestable";

const items = [
   { id: 0, text: "Item 1" },
   {
      id: 1,
      text: "Item 2",
      children: [
         { id: 2, text: "Item 3" },
         { id: 3, text: "Item 4" },
         {
            id: 4,
            text: "Item 5",
            children: [
               { id: 5, text: "Item 6" },
               { id: 6, text: "Item 7" },
               { id: 7, text: "Item 8" },
            ],
         },
         { id: 8, text: "Item 9" },
         { id: 9, text: "Item 10" },
      ],
   },
];

const renderItem = ({ item }) => item.text;

const NTable = () => {
   return <Nestable items={items} renderItem={renderItem} />;
};

export default NTable;
