export function Toast({ message }) {
  return (
    <div>
      <div className="snackbar" style={{ width: "17rem" }}>
        {message}
      </div>
    </div>
  );
}
