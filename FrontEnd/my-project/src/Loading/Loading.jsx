import load from "../photo/loading.svg";

const Loading = () => {
  return (
    <>
      <div className="resultCart col-span-full row-start-7 row-end-13 m-2  flex flex-wrap justify-center  ">
        {/* <!-- loading effect --> */}

        <div className="flex flex-col space-y-3 items-center justify-center w-56 h-56 border rounded-lg bg-slate-100 ">
          <div>
            <img
              className="animate-spin bg-blue-200 rounded-full"
              src={load}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <span className="animate-pulse font-serif text-lg font-medium">
              Loading....
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
