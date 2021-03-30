import { useDataContext } from "../data-context";

export function Filter() {
  const { state, dispatch } = useDataContext();

  return (
    <div style={{ margin: "auto", maxWidth: "30rem" }}>
      <div style={{ margin: "auto", textAlign: "right" }}>
        <button
          class="btn btn-text"
          style={{ color: "#1E40AF" }}
          onClick={() => {
            dispatch({ type: "CLEAR_FILTER" });
          }}
        >
          CLEAR
        </button>
      </div>
      <fieldset>
        <legend>Sort By</legend>
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
        <label>Price - High To low</label>
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
        <label>Price - Low To High</label>
      </fieldset>
      <fieldset style={{ marginTop: "1rem" }}>
        <legend>Filter</legend>
        <input
          type="checkbox"
          checked={state.sortFilterStates.includeOutOfStock}
          onChange={() => {
            dispatch({ type: "INCLUDE_OUT_OF_STOCK" });
          }}
        />
        <label>Include out of stock</label>
        <input
          type="checkbox"
          checked={state.sortFilterStates.fastDelivery}
          onChange={() => {
            dispatch({ type: "FAST_DELIVERY" });
          }}
        />
        <label>Fast delivery</label>
      </fieldset>
    </div>
  );
}
