import React from "react";
import Nestable from "react-nestable";

const items = [
   { id: 10, text: "Item 13" },
   { id: 11, text: "Item 13" },
   { id: 12, text: "Item 14" },
   {
      id: 13,
      text: "Item 15",
      children: [
         { id: 14, text: "Item 16" },
         { id: 15, text: "Item 17" },
         { id: 16, text: "Item 18" },
         { id: 17, text: "Item 19" },
         { id: 18, text: "Item 20" },
         { id: 19, text: "Item 21" },
      ],
   },
];

const renderItem = ({ item }) => item.text;

const NTable2 = () => {
   return <Nestable items={items} renderItem={renderItem} />;
};

export default NTable2;
