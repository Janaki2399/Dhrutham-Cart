export function Toast({ message }) {
  return (
    <div>
      <div className="snackbar snackbar-width">{message}</div>
    </div>
  );
}
