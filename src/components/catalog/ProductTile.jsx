import { useState } from 'react';

export default function ProductTile(props) {
  // Images
  const { products } = props;
  const { imageSrc, imageAlt, heading, price } = products;

  // Add/Remove to/from cart
  const [quantity, setQuantity] = useState(0);
  const stockLimit = Math.floor(Math.random() * 10);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity <= stockLimit) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <>
      <header className="product-tile-header position-relative">
        <div className="over-hidden">
          <a href="/product_description" title={imageAlt}>
            <picture>
              <img src={imageSrc} alt={imageAlt} />
            </picture>
          </a>
        </div>

        <h1>
          <a href="/product_description" title={imageAlt}>
            {heading}
          </a>
        </h1>

        <a
          href=""
          title="Add to wish list"
          className="button button-primary-outline button-wish-list d-inline d-lg-none"
        >
          <span className="position-relative">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-heart"></i>
          </span>
        </a>

        <a
          href=""
          title="Add to wish list"
          className="button button-primary-outline button-wish-list-lg d-none d-lg-inline"
        >
          <span className="position-relative">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-heart d-none d-lg-inline"></i>
          </span>
        </a>
      </header>

      <div className="product-tile-content">
        <span className="product-price">{`$${price}`}</span>
      </div>

      <footer className="product-tile-footer add-to-cart">
        <button
          type="button"
          title="Remove from cart"
          className="decrease-qty qty-button"
          onClick={decreaseQuantity}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
        <span className="product-qty">{quantity}</span>
        <button
          type="button"
          title="Add to cart"
          className="increase-qty qty-button"
          onClick={increaseQuantity}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </footer>
    </>
  );
}
