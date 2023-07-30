import sohoj from "../photo/shohoz_logo.png";

const Trop = ({ name, route, time, seat, price }) => {
  return (
    <>
      <div class="tropCart bg-slate-200 w-11/12 h-32 ml-5 mt-2 grid grid-cols-8 grid-rows-4">
        {/* <!-- name of bus -->  */}
        <p class="col-start-1 col-end-7 ml-2 text-lg font-serif font-bold">
         {name}
          <label class="font-semibold text-sm">
            ,<sub>AC</sub>
          </label>
        </p>
        <p class="col-start-1 col-end-7 row-start-2 row-end-2  ml-1 text-base font-serif font-medium flex">
          {route.replace(/Route:/g,'')}
        </p>
        <p class="col-start-1 col-end-7 row-start-3 row-end-3 ml-1 mt-3 text-base font-serif font-medium">
          {" "}
          Start Time:
          <label class="text-sm font-mono font-semibold"> {time} </label>
        </p>
        <p class="col-start-1 col-end-7 ml-1 row-start-4 row-end-4  text-base font-serif font-medium">
          Price:
          <label class="text-sm font-mono font-semibold"> {price} </label>
          <label class="text-sm font-mono font-semibold"> |Seats: {seat} </label>
        </p>

        {/* <!-- photo div --> */}
        <div class=" bg-black col-start-7 col-end-9 mr-2 row-start-2 row-end-5 mb-4   ">
          <img class="h-full w-full" src={sohoj} alt="" />
        </div>
      </div>
    </>
  );
};

export default Trop;
