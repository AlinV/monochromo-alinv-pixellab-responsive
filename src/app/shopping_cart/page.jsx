import { menProducts } from '@/components/catalog/productData';
import Footer from '@/components/common/FooterMain';
import Footer2 from '@/components/common/FooterSecondary';
import Header2 from '@/components/common/HeaderOtherPages';

export default function ShoppingCart() {
  const [product] = menProducts;
  const { imageSrc, imageAlt, price } = product;
  return (
    <>
      <header className="header2">
        <Header2></Header2>
      </header>

      <main className="shopping-cart container">
        <header className="header3">
          <h1>Shopping cart</h1>
        </header>

        <section className="shopping-cart-content">
          <ul>
            <li>Item</li>

            <li>Description</li>

            <li>Color</li>

            <li>Quantity</li>

            <li>Unit Price</li>
          </ul>

          <ul>
            <li>
              <picture>
                <img src={imageSrc} alt={imageAlt} />
              </picture>
            </li>

            <li className="cart-product-description">
              <h2>Monochrome Max</h2>

              <p>Max Bill Chronoscope 40mm Stainless Steel and Leather Watch</p>
            </li>

            <li>Black</li>

            <li>
              <div className="button-quantity">
                <button type="button" title="Decrease">
                  <i class="fa-solid fa-minus"></i>
                </button>

                <span>1</span>

                <button type="button" title="Increase">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </li>

            <li>${price}</li>
          </ul>

          <div className="d-flex flex-column align-items-end">
            <div className="button-ctrl">
              <a href="" title="Wishlist">
                Move to wishlist
              </a>

              <button type="button" title="Remove product">
                Remove product
              </button>
            </div>

            <div className="cart-product-pricing">
              <span>subtotal</span>

              <span>${price}</span>

              <span>shipping</span>

              <span>$free</span>

              <span>taxes</span>

              <span>$0</span>

              <span>total</span>

              <span>${price}</span>
            </div>

            <a href="/sign_in" title="Buy now" className="buy-product">
              Buy now
            </a>
          </div>
        </section>

        <footer className="footer2">
          <Footer2></Footer2>
        </footer>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
