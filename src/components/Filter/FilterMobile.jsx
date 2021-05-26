import { useDataContext } from "../../contexts/data-context";

export function FilterMobile({ setFilterMobile, sortFilterDispatch }) {
  return (
    <div
      className="close-apply-filter cursor-pointer"
      style={{ display: "flex" }}
    >
      <div
        className="border-right gray-border full-height align-center"
        style={{ width: "50%" }}
        onClick={() => {
          setFilterMobile((prev) => !prev);
          sortFilterDispatch({ type: "CLEAR_FILTER" });
        }}
      >
        Close
      </div>
      <div
        className="full-height align-center"
        style={{ width: "50%" }}
        onClick={() => {
          setFilterMobile((prev) => !prev);
        }}
      >
        Apply
      </div>
    </div>
  );
}
