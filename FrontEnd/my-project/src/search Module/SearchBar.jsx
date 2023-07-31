import { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [from, setFrom] = useState("Enter");
  const [to, setTo] = useState("Enter");
  const [time, setTime] = useState();

  const[ticket,setTicket]=useState();


  // making post request in the server

  async function asyncCall(e) {
    console.log("clicked the request function");
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:7000/search/", {
        from: "Dhaka",
        to: "Barisal",
        date: "31-Jul-2023",
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

  return (
    <>
      <div className=" col-start-2 col-end-12 row-start-2 row-end-7 mt-2 flex justify-center items-center">
        {/* <!-- searching form --> */}

        <form className="formCart h-4/5 flex-row space-y-4 p-2">
          <div className="p-1 flex space-x-2">
            <label>From:</label>
            <input
              className="border-2 border-slate-500 rounded-lg w-3/5"
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          <div className="p-1 flex space-x-7">
            <label>To:</label>
            <input
              className="border-2 border-slate-500 rounded-lg w-3/5"
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <div className="p-1 flex space-x-3">
            <label>Date:</label>

            <input
              type="date"
              className="border-2 border-slate-500 rounded-lg w-3/5"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            {/* <p>time is {time}</p> */}
          </div>
          {/* <!-- search button  --> */}
          <div className=" w-full flex justify-center ">
            <div className=" buttonCart bg-white w-2/4 text-center       ">
              <button onClick={asyncCall}>Search</button>
            </div>
          </div>

          <div className="w-5/6  m-6 bg-slate-100">
            <p className="text-sm">Note:</p>
            <p className="font-serif text-xs">
              Please make sure a stable connection
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
