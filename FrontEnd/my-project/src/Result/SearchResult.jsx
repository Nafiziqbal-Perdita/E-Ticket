import Trop from "./Trop";

import { useTicket } from "../Context/TicketContext";


const SearchResult = () => {
  const { ticket } = useTicket();

  // console.log(ticket);

  ticket.map((e,i) => console.log( "index"+i+" "+  e.name + " " + e.price+" "+e.photo));

  return (
    <>
      <div className=" resultCart col-span-full row-start-7 row-end-13 m-2 bg-white  flex-row justify-center  overflow-auto  ">
        {/* <!-- every cart for Results --> */}

        {ticket.map((data, i) => (
          <Trop
            key={i}
            name={data.name}
            route={data.route}
            time={data.departureTime}
            seat={data.seat}
            price={data.price}
            photo={data.photo}
          />
        ))}
      </div>
    </>
  );
};

export default SearchResult;
