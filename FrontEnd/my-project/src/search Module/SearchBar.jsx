import { useEffect, useState } from "react";
import { useTicket } from "../Context/TicketContext";
import RouteSuggestion from "./RouteSuggestion";

import data from "./data.json";

const SearchBar = () => {
  const { asyncCall } = useTicket();
  const {
    from,
    to,
    time,
    filterDataFrom,
    filterDataTo,
    setFrom,
    setTo,
    setTime,
    handleFilterFrom,
    handleFilterTo,
  } = useTicket();

  return (
    <>
      <div className=" col-start-2 col-end-12 row-start-2 row-end-7 mt-2 flex justify-center items-center">
        {/* <!-- searching form --> */}

        <form className="formCart h-4/5 flex-row space-y-4 p-2 overflow-auto formRes">
          <div className="p-1 flex space-x-2">
            <label>From:</label>

            <div>
              <input
                className="border-2 border-slate-500 rounded-lg w-4/5"
                type="text"
                value={from}
                onChange={handleFilterFrom}
              />

              {/* search suggeston */}

              {filterDataFrom.length != 0 && (
                <div>
                  {filterDataFrom.slice(0, 5).map((value,indx) => (
                    <RouteSuggestion key={indx} name={value.name} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="p-1 flex space-x-7">
            <label>To:</label>
            <div>
              <input
                className="border-2 border-slate-500 rounded-lg w-4/5"
                type="text"
                value={to}
                onChange={handleFilterTo}
              />

              {/* search suggeston */}
              {/* <RouteSuggestion /> */}
            

              {filterDataTo.length != 0 && (
                <div>
                  {filterDataTo.slice(0, 5).map((value,indx) => (
                    <RouteSuggestion key={indx} name={value.name} />
                  ))}
                </div>
              )}

            
            </div>
          </div>

          <div className="p-1 flex space-x-3">
            <label>Date:</label>

            <input
              type="date"
              className="border-2 border-slate-500  rounded-lg w-3/5 fromDateRes"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            {/* <p>time is {time}</p> */}
          </div>
          {/* <!-- search button  --> */}
          <div className=" w-full flex justify-center fromSearchRes ">
            <div className=" buttonCart bg-white w-2/4 text-center       ">
              <button onClick={asyncCall}>Search</button>
            </div>
          </div>

          <div className="w-5/6 m-6 bg-slate-100 md:hidden">
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
