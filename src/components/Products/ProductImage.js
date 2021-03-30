export function ProductImage({ item }) {
  return (
    <div style={{ position: "relative" }}>
      <img className="card-img" src={item.image} alt="product-card" />
      {!item.inStock && <div className="text-overlay">OUT OF STOCK</div>}
    </div>
  );
}
