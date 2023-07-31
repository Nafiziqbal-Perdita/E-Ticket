import sohoj from "../photo/shohoz_logo.png";

const Trop = ({ name, route, time, seat, price }) => {
  return (
    <>
      <div className="tropCart bg-slate-200 w-11/12 h-32 ml-5 mt-2 grid grid-cols-8 grid-rows-4">
        {/* <!-- name of bus -->  */}
        <p className="col-start-1 col-end-7 ml-2 text-lg font-serif font-bold">
         {name}
          <label className="font-semibold text-sm">
            ,<sub>AC</sub>
          </label>
        </p>
        <p className="col-start-1 col-end-7 row-start-2 row-end-2  ml-1 text-base font-serif font-medium flex">
          {route.replace(/Route:/g,'')}
        </p>
        <p className="col-start-1 col-end-7 row-start-3 row-end-3 ml-1 mt-3 text-base font-serif font-medium">
          {" "}
          Start Time:
          <label className="text-sm font-mono font-semibold"> {time} </label>
        </p>
        <p className="col-start-1 col-end-7 ml-1 row-start-4 row-end-4  text-base font-serif font-medium">
          Price:
          <label className="text-sm font-mono font-semibold"> {price} </label>
          <label className="text-sm font-mono font-semibold"> |Seats: {seat} </label>
        </p>

        {/* <!-- photo div --> */}
        <div className=" bg-black col-start-7 col-end-9 mr-2 row-start-2 row-end-5 mb-4   ">
          <img className="h-full w-full" src={sohoj} alt="" />
        </div>
      </div>
    </>
  );
};

export default Trop;
