import Footer from '@/components/common/FooterMain';
import Footer2 from '@/components/common/FooterSecondary';
import Header2 from '@/components/common/HeaderOtherPages';

export default function Shipping() {
  return (
    <>
      <header className="header2">
        <Header2></Header2>
      </header>

      <main className="shipping container">
        <header className="header3">
          <h1>Shipping</h1>
        </header>

        <section className="shipping-content">
          <ul>
            <li>
              <a href="" title="Sign in">
                Sign in
              </a>

              <span></span>
            </li>

            <li>
              <a href="" title="Shipping">
                Shipping
              </a>

              <span></span>
            </li>

            <li>
              <a href="/billing" title="Billing">
                Billing
              </a>

              <span></span>
            </li>

            <li>
              <a href="" title="Confirmation">
                Confirmation
              </a>

              <span></span>
            </li>
          </ul>

          <form className="shipping-form">
            <div className="shipping-form-details">
              <div className="shipping-form-details-inputs">
                <div className="input-details">
                  <label htmlFor="user-title">title *</label>

                  <input
                    type="text"
                    name="user-title"
                    id="user-title"
                    required
                  />
                </div>

                <div className="input-details">
                  <label htmlFor="first-name">first name *</label>

                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    required
                  />
                </div>

                <div className="input-details">
                  <label htmlFor="last-name">last name *</label>

                  <input type="text" name="last-name" id="last-name" />
                </div>

                <div className="input-details">
                  <label htmlFor="country">country *</label>

                  <input type="text" name="country" id="country" required />
                </div>

                <div className="input-details">
                  <label htmlFor="address-line-1">address line 1 *</label>

                  <input
                    type="text"
                    name="address-line-1"
                    id="address-line-1"
                    required
                  />
                </div>

                <div className="input-details">
                  <label htmlFor="address-line-2">address line 2 </label>

                  <input
                    type="text"
                    name="address-line-2"
                    id="address-line-2"
                  />
                </div>

                <div className="input-details">
                  <label htmlFor="city">city * </label>

                  <input type="text" name="city" id="city" required />
                </div>

                <div className="input-details">
                  <label htmlFor="county">county / province </label>

                  <input type="text" name="county" id="county" />
                </div>

                <div className="input-details">
                  <label htmlFor="postcode">postcode / zip * </label>

                  <input type="text" name="postcode" id="postcode" required />
                </div>

                <div className="input-details">
                  <label htmlFor="telephone">telephone * </label>

                  <input type="text" name="telephone" id="telephone" required />
                </div>

                <div className="input-details">
                  <label htmlFor="mobile">mobile </label>

                  <input type="text" name="mobile" id="mobile" />
                </div>
              </div>

              <div className="form-info text-end">* required fields</div>

              <div className="radio-chose-ba">
                <div className="sp-as-ba d-flex gap-3">
                  <input type="radio" name="billing-address" id="sp-as-ba" />
                  <label htmlFor="sp-as-ba">
                    use shipping address as billing address
                  </label>
                </div>

                <div className="separate-ba d-flex gap-3">
                  <input type="radio" name="billing-address" id="separate-ba" />
                  <label htmlFor="separate-ba">
                    enter separate billing address
                  </label>
                </div>
              </div>
            </div>

            <div className="shipping-form-description">
              <h1>Shipping Details</h1>

              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings
              </p>

              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. builder of.
              </p>
            </div>

            <button type="button" title="Submit shipping details">
              <a href="/billing">Continue</a>
            </button>
            {/* button type will be change in submit later on */}
          </form>
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
