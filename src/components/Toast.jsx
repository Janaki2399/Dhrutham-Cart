export function Toast({ message }) {
  return (
    <div>
      <div className="snackbar snackbar-width snackbar-top-right">
        {message}
      </div>
    </div>
  );
}
