import React, { useState, useContext } from "react";
import axios from "axios";
import { nameTojatri } from "../Data/nameTojatri";
import { data } from "autoprefixer";
const TicketContext = React.createContext();

export const useTicket = () => {
  return useContext(TicketContext);
};

export const TicketProvider = ({ children }) => {
  // all the states are here
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [ticket, setTicket] = useState([]);

  //functions are deployed here

  const sohojCall = async () => {
    // making requst to sohoj information
    try {
      const res = await axios.post("http://localhost:7000/search/sohoj", {
        from: "Dhaka",
        to: "Barisal",
        date: "05-Aug-2023",
      });
      // console.log(res.data);
      const tickets = res.data;
      console.log(tickets);
      setTicket(tickets);
      // tickets.map((e) => console.log(e.name + " " + e.price));
    } catch (error) {
      console.log("There is an error");
      console.error(error);
    }
  };




  //for jatri


  const jatriCall = async () => {
    // making requst to jatri information
    var myDate = new Date("2023-08-06"); //year-month-date
    var result = myDate.getTime();
    console.log("date in ms");
    console.log(result);

    let fromLocal = "";
    for (const key in nameTojatri) {
      // console.log(nameTojatri[key]);
      if (key === from) {
        fromLocal = nameTojatri[key];
      }
    }
    let toLocal = "";
    for (const key in nameTojatri) {
      // console.log(nameTojatri[key]);
      if (key === to) {
        toLocal = nameTojatri[key];
      }
    }
    console.log("main data");

    try {
      const res = await axios.post("http://localhost:7000/search/jatri/", {
        from: "Dhaka",
        to: "Barisal",
        date: "05-Aug-2023",
      });
      // console.log(res.data);
      const tickets = res.data;
      console.log(tickets);
      setTicket(tickets);
      // tickets.map((e) => console.log(e.name + " " + e.price));
    } catch (error) {
      console.log("There is an error");
      console.error(error);
    }




  };

  async function asyncCall(e) {
    console.log("clicked the request function");
    e.preventDefault();
    // sohojCall();
    jatriCall();
    console.log(from);
    console.log(to);
    console.log(time);

    // Expected output: "resolved"
  }

  const value = {
    ticket,
    from,
    to,
    time,
    setFrom,
    setTo,
    setTime,
    asyncCall,
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};
