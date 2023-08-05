import React from "react";
import LayOut from "./LayOut";
import { TicketProvider } from "./Context/TicketContext";
export default function App() {
  return (
    <>
      <TicketProvider>
        <LayOut />
      </TicketProvider>
    </>
  );
}
