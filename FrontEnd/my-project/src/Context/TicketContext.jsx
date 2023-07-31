import React, { useState, useContext } from "react";
import axios from "axios";
const TicketContext = React.createContext();

export const useTicket = () => {
  return useContext(TicketContext);
};

export const TicketProvider = ({ children }) => {
  const [ticket, setTicket] = useState([]);

  async function asyncCall(e) {
    console.log("clicked the request function");
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:7000/search/", {
        from: "Dhaka",
        to: "Barisal",
        date: "05-Aug-2023",
      });

      // console.log(res.data);
      const tickets = res.data;
      setTicket(tickets);

      // tickets.map((e) => console.log(e.name + " " + e.price));
    } catch (error) {
      console.log("There is an error");
      console.error(error);
    }

    // Expected output: "resolved"
  }

  const value = {
    ticket,
    asyncCall,
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};
