import sohoj from "../photo/shohoz_logo.png"



const Trop = ({ name, route, time, seat, price }) => {
  return (
    <>
      <div class=" m-2 ">
        <div class="bg-blue-500 flex items-center justify-between rounded-xl m-2 shadow-md ">
          {/* <!-- information  --> */}
          <div class="p-2">
            <label class="font-mono text-2xl font-extrabold">{name}</label>
            <br />
            <span>
              <label class="text-lg font-bold"> {route} </label>
              <br />
              <label class="text-base font-semibold">Seats Left: {seat} </label>
            </span>
            <br />
            <span>
              <label class="text-base font-semibold">Time: {time} </label>
            </span>
            <br />
            <span>
              <label class="text-sm font-medium">Fare:{price} </label>
            </span>
          </div>

          {/* <!-- photo --> */}
          <div class="">
            <img class="h-28 mr-4" src={sohoj} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trop;
