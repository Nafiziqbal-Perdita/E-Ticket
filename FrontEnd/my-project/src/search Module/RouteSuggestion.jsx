const RouteSuggestion = ({ name }) => {
  return (
    <>
      <div className="bg-white w-4/5 rounded-lg mt-1">
        <div className="hover:bg-yellow-50 mt-1 p-1 rounded-md text-left">
          <p className="px-1">{name}</p>
        </div>
      </div>
    </>
  );
};

export default RouteSuggestion;
