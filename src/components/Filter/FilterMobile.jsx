export function FilterMobile({ setFilterMobile, sortFilterDispatch }) {
  const clearFilter = () => {
    setFilterMobile((previousState) => !previousState);
    sortFilterDispatch({ type: "CLEAR_FILTER" });
  };

  const applyFilter = () => {
    setFilterMobile((previousState) => !previousState);
  };
  return (
    <div className="close-apply-filter cursor-pointer flex-horizontal">
      <div
        className="border-right gray-border align-center half-width"
        onClick={clearFilter}
      >
        Close
      </div>
      <div className=" align-center half-width" onClick={applyFilter}>
        Apply
      </div>
    </div>
  );
}
