import Footer from '@/components/common/Footer';
import Footer2 from '@/components/common/Footer2';
import Header2 from '@/components/common/Header2';

export default function ShoppingCart() {
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
                <img
                  src="/images/products/recently_viewed_thumbnail_2-5.png"
                  alt="Black Cluse watch with fabric strap"
                />
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

            <li>$475</li>
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

              <span>$475</span>

              <span>shipping</span>

              <span>$free</span>

              <span>taxes</span>

              <span>$0</span>

              <span>total</span>

              <span>$475</span>
            </div>

            <a href="/pages/sign_in" title="Buy now" className="buy-product">
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
