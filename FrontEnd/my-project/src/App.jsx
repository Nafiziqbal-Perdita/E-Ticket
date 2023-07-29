import React from "react";
// import LayOut from "./LayOut";

import { busData } from "./Data/data";

export default function App() {
  return (
    <>
      <p>hi i am nafiz</p>

      <div>
        {busData.map(( data,i) => (
          <div>
            <li> {i} </li>
            <li> {data.name} </li>
            <li> {data.model} </li>
          </div>
        ))}
      </div>

      {/* <LayOut /> */}
    </>
  );
}
