import FooterMain from '@/components/common/FooterMain';
import FooterSecondary from '@/components/common/FooterSecondary';
import HeaderOtherPages from '@/components/common/HeaderOtherPages';

export default function Billing() {
  return (
    <>
      <header className="header2">
        <HeaderOtherPages></HeaderOtherPages>
      </header>

      <main className="billing container">
        <header className="header3">
          <h1>Billing</h1>
        </header>

        <section className="billing-content">
          <ul>
            <li>
              <a href="" title="Sign in">
                Sign in
              </a>

              <span></span>
            </li>

            <li>
              <a href="/shipping" title="Shipping">
                Shipping
              </a>

              <span></span>
            </li>

            <li>
              <a href="" title="Billing">
                Billing
              </a>

              <span></span>
            </li>

            <li>
              <a href="/confirmation" title="Confirmation">
                Confirmation
              </a>

              <span></span>
            </li>
          </ul>

          <div className="order-summary billing-content-section">
            <h1>1. Your order summary</h1>

            <ul>
              <li>Item</li>

              <li>Quantity</li>

              <li>Unit Price</li>

              <li>Vat</li>

              <li>Shipping</li>
            </ul>

            <div className="order-summary-inner">
              <ul>
                <li>
                  <picture>
                    <img
                      src="/images/products/recently_viewed_thumbnail_2-5.png"
                      alt="Black Cluse watch with fabric strap"
                    />
                  </picture>

                  <h2>
                    Monochrome Max <br /> Bill / <span>Black</span>
                  </h2>
                </li>

                <li>1</li>

                <li>$475</li>

                <li>$90.25</li>

                <li>$10</li>
              </ul>

              <div className="total-price">
                <span>Total</span>

                <span>$575.25</span>
              </div>
            </div>
          </div>

          <div className="s-and-b-address billing-content-section">
            <h1>2. Review shipping and billing address</h1>

            <div className="s-and-b-address-inner">
              <section className="shipping-address">
                <h2>Shipping address</h2>

                <p>
                  <span>Mr. Kill Bill</span>
                  <span>1234 Couckoo Boulevard</span>
                  <span>Quarantine Zone</span>
                  <span>47862</span>
                  <span>Happy Country</span>
                </p>

                <a href="" title="Change shipping address">
                  change shipping address
                </a>
              </section>

              <section className="billing-address">
                <h2>Billing address</h2>

                <p>Same as shipping Address</p>

                <a href="" title="Change billing address">
                  change billing address
                </a>
              </section>
            </div>
          </div>

          <div className="delivery-method billing-content-section">
            <h1>3. Delivery Method</h1>

            <div className="delivery-method-inner">
              <section className="shipping-address">
                <h2>
                  Express delivery ($ <span>Free</span>)
                </h2>

                <p>Delivered in 3-4 business days</p>

                <a href="" title="Change shipping address">
                  change shipping address
                </a>
              </section>

              <section className="billing-address">
                <h2>Billing address</h2>

                <p>Same as shipping Address</p>

                <a href="" title="Change billing address">
                  change billing address
                </a>
              </section>
            </div>
          </div>
        </section>

        <footer className="footer2">
          <FooterSecondary></FooterSecondary>
        </footer>
      </main>

      <footer className="footer">
        <FooterMain></FooterMain>
      </footer>
    </>
  );
}
