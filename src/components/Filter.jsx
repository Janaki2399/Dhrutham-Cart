import { useDataContext } from "../contexts/data-context";

export function Filter({filterMobile}) {
  const { state, dispatch } = useDataContext();

  return (
    <div className={!filterMobile?"sidebar full-height":"filterMobile"} >
      <div className="text-end">
        <button
          className="btn btn-text text-color-primary"
          onClick={() => {
            dispatch({ type: "CLEAR_FILTER" });
          }}
        >
          CLEAR ALL
        </button>
      </div>
      <div className="flex-column">
        <div className="font-bold-1">Sort By</div>
        <div className="margin-top">
        <input
          type="radio"
          name="sortBy"
          checked={
            state.sortFilterStates.sortBy &&
            state.sortFilterStates.sortBy === "PRICE_HIGH_TO_LOW"
          }
          onChange={() => {
            dispatch({ type: "SORT_BY", payload: "PRICE_HIGH_TO_LOW" });
          }}
        />
        <label className="font-size-6 ">Price - High To low</label>
        </div>
       
        <div>
        <input
          type="radio"
          name="sortBy"
          checked={
            state.sortFilterStates.sortBy &&
            state.sortFilterStates.sortBy === "PRICE_LOW_TO_HIGH"
          }
          onChange={() => {
            dispatch({ type: "SORT_BY", payload: "PRICE_LOW_TO_HIGH" });
          }}
        />
        <label className="font-size-6">Price - Low To High</label>
      </div>
        </div>
        
      <div className="flex-column" style={{ marginTop: "1rem" }}>
      <div className="font-bold-1">Filter</div>
        <div className="flex-horizontal margin-top">
        <input
          type="checkbox"
          checked={state.sortFilterStates.includeOutOfStock}
          onChange={() => {
            dispatch({ type: "INCLUDE_OUT_OF_STOCK" });
          }}
        />
        <label className="font-size-6">Include out of stock</label>
        </div>
       <div> 
         <input
          type="checkbox"
          checked={state.sortFilterStates.fastDelivery}
          onChange={() => {
            dispatch({ type: "FAST_DELIVERY" });
          }}
        />
        <label className="font-size-6">Fast delivery</label></div>
       
      </div>
    </div>
  );
}
