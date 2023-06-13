import "./ProductPrice.css";

const ProductPrice = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Bouquet" />
      <div className="label">on sale!</div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p className="price">
        $ <span>{props.price}</span>
      </p>
      <button>Buy now!</button>
    </div>
  );
};

export default ProductPrice;
