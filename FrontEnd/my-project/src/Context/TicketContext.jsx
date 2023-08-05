import React, { useState, useContext } from "react";
import axios from "axios";
import { nameTojatri } from "../Data/nameTojatri";
import { sohojMonth } from "../Data/sohojMonth";
import data from "../search Module/data.json";
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
  const [loading, setLoading] = useState(false);
  const [filterDataFrom, setFilterDataFrom] = useState([]);
  const [filterDataTo, setFilterDataTo] = useState([]);
  const [word, setWord] = useState("");

  let jatriData = [];
  let sohojData = [];

  //functions are deployed here
  // for sohoj
  const sohojCall = async () => {
    // console.log("sohoj Call date");

    // console.log(time);

    const year = time.substring(0, 4);
    // console.log(year);
    const mnth = time.substring(5, 7);
    // console.log(mnth);
    const date = time.substring(8, 10);
    // console.log(date);
    let month = "";
    for (const key in sohojMonth) {
      // console.log(nameTojatri[key]);
      if (key === mnth) {
        month = sohojMonth[key];
      }
    }

    // console.log(month);

    const finalDate = `${date}-${month}-${year}`;
    // console.log(finalDate);

    const departure = from[0].toUpperCase() + from.slice(1);
    const destination = to[0].toUpperCase() + to.slice(1);

    // console.log(departure);
    // console.log(destination);
    // making requst to sohoj information
    try {
      const res = await axios.post("http://localhost:7000/search/sohoj", {
        from: departure,
        to: destination,
        date: finalDate,
      });
      // console.log(res.data);
      const tickets = res.data;
      // console.log(tickets);
      sohojData = tickets;

      // tickets.map((e) => console.log(e.name + " " + e.price));
    } catch (error) {
      console.log("There is an error");
      console.error(error);
    }
  };

  //for jatri

  const jatriCall = async () => {
    // making requst to jatri information
    var myDate = new Date(time); //year-month-date
    var resultingTime = myDate.getTime();
    // console.log("date in ms");
    // console.log(resultingTime);

    const departure = from[0].toUpperCase() + from.slice(1);
    const destination = to[0].toUpperCase() + to.slice(1);

    let fromLocal = "";
    for (const key in nameTojatri) {
      // console.log(nameTojatri[key]);
      if (key === departure) {
        fromLocal = nameTojatri[key];
      }
    }
    let toLocal = "";
    for (const key in nameTojatri) {
      // console.log(nameTojatri[key]);
      if (key === destination) {
        toLocal = nameTojatri[key];
      }
    }
    // console.log("main data");

    // console.log("This is Jatri Call function");
    // console.log(fromLocal);
    // console.log(toLocal);

    try {
      const res = await axios.post("http://localhost:7000/search/jatri/", {
        from: fromLocal,
        to: toLocal,
        date: resultingTime,
      });
      // console.log(res.data);
      const tickets = res.data;
      // console.log(tickets);
      jatriData = tickets;

      // tickets.map((e) => console.log(e.name + " " + e.price));
    } catch (error) {
      console.log("There is an error");
      console.error(error);
    }
  };

  let allData = [];

  async function asyncCall(e) {
    console.log("clicked the request function");
    e.preventDefault();
    setLoading(true);
    await sohojCall();
    await jatriCall();

    allData = sohojData.concat(jatriData);
    setLoading(false);
    setTicket(allData);
    // console.log(from);
    // console.log(to);
    // console.log(time);

    // Expected output: "resolved"
  }

  // console.log(ticket);

  // from data filtering and setting
  const handleFilterFrom = (e) => {
    const searchWord = e.target.value;
    setFrom(e.target.value);
    // filtering funciton
    const dataFilter = data.filter((value) => {
      const newData = value.name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      return newData;
    });

    const notShowWord = searchWord[0].toUpperCase() + searchWord.slice(1);
    console.log(notShowWord);
    if (searchWord === "") {
      setFilterDataFrom([]);
    } else if (dataFilter.length === 1 && dataFilter[0].name === notShowWord) {
      setFilterDataFrom([]);
    } else {
      setFilterDataFrom(dataFilter);
    }
  };

  // filtering data for To
  const handleFilterTo = (e) => {
    const searchWord = e.target.value;

    setTo(e.target.value);

    // filtering funciton
    const dataFilter = data.filter((value) => {
      const newData = value.name
        .toLowerCase()
        .includes(searchWord.toLowerCase());
      return newData;
    });

    const notShowWord = searchWord[0].toUpperCase() + searchWord.slice(1);
    if (searchWord === "") {
      setFilterDataTo([]);
    } else if (dataFilter.length === 1 && dataFilter[0].name === notShowWord) {
      setFilterDataTo([]);
    } else {
      setFilterDataTo (dataFilter);
    }
  };

  const value = {
    ticket,
    from,
    to,
    time,
    loading,
    filterDataFrom,
    filterDataTo,
    setFrom,
    setTo,
    setTime,
    asyncCall,
    handleFilterFrom,
    handleFilterTo,
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};
