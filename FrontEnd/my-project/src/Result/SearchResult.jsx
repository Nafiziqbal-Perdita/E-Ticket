import Cart from "./Cart";

import { useTicket } from "../Context/TicketContext";

const SearchResult = () => {
  const { ticket } = useTicket();
  let ticketData = [];
  ticketData = ticket;

  ticketData.sort((a, b) => {
    let fa = a.price.toLowerCase();
    let fb = b.price.toLowerCase();


    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  // console.log(ticket);

  ticket.map((e, i) =>
    console.log("index" + i + " " + e.name + " " + e.price + typeof e.price + "  " + e.photo)
  );

  return (
    <>
      <div className=" resultCart col-span-full row-start-7 row-end-13 m-2 bg-white flex flex-wrap justify-center overflow-auto  searchBoxRes">
        {/* <!-- every cart for Results --> */}

        {ticketData.map((data, i) => (
          <Cart
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
