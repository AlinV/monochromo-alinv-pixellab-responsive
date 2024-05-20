'use client';

import { menProducts } from '@/components/catalog/productData';
import FooterMain from '@/components/common/FooterMain';
import FooterSecondary from '@/components/common/FooterSecondary';
import HeaderOtherPages from '@/components/common/HeaderOtherPages';
import { useEffect } from 'react';

export default function Billing() {
  const [product] = menProducts;
  const { imageSrc, imageAlt, price } = product;

  useEffect(() => {
    const handleInput = (event) => {
      const currentInput = event.target;
      const maxLength = parseInt(currentInput.getAttribute('maxLength'), 10);
      const currentLength = currentInput.value.length;

      if (event.inputType === 'insertText' && /\D/.test(event.data)) {
        currentInput.value = currentInput.value.replace(/\D/g, '');
      }

      if (currentLength >= maxLength) {
        const nextInput = currentInput.nextElementSibling;
        if (nextInput) {
          nextInput.focus();
        }
      } else if (event.key === 'Backspace' && currentLength === 0) {
        const prevInput = currentInput.previousElementSibling;
        if (prevInput) {
          prevInput.focus();
        }
      }
    };

    const handleKeydown = (event) => {
      if (
        !event.key.match(/^[0-9]$/) &&
        event.key !== 'Backspace' &&
        event.key !== 'Delete' &&
        event.key !== 'ArrowLeft' &&
        event.key !== 'ArrowRight'
      ) {
        event.preventDefault();
      }
    };

    const inputs = document.querySelectorAll('.split-input input');
    inputs.forEach((input) => {
      input.addEventListener('input', handleInput);
      input.addEventListener('keydown', handleKeydown);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener('input', handleInput);
        input.removeEventListener('keydown', handleKeydown);
      });
    };
  }, []);
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
                    <img src={imageSrc} alt={imageAlt} />
                  </picture>

                  <h2>
                    Monochrome Max <br /> Bill / <span>Black</span>
                  </h2>
                </li>

                <li>1</li>

                <li>${price}</li>

                <li>${price * 0.2}</li>

                <li>$10</li>
              </ul>

              <div className="total-price">
                <span>Total</span>

                <span>${price + 10}</span>
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

          <div className="payment-methods billing-content-section">
            <h1>
              4. P<span className="text-lowercase">ayment methods</span>
            </h1>

            <div className="payment-methods-inner">
              <ul>
                <li>
                  <label htmlFor="card-payment">
                    <i class="fa-solid fa-credit-card"></i>
                  </label>
                  <input type="radio" name="payment-method" id="card-payment" />
                </li>

                <li>
                  <label htmlFor="paypal" className="">
                    <i class="fa-brands fa-paypal"></i>
                  </label>
                  <input type="radio" name="payment-method" id="paypal" />
                </li>
              </ul>

              <form className="payment-form d-flex flex-column align-items-start">
                <div className="input-container">
                  <label htmlFor="name-on-card">Name on card</label>
                  <input
                    className="w-100"
                    type="text"
                    name="name-on-card"
                    id="name-on-card"
                  />
                </div>

                <div className="input-container">
                  <label htmlFor="card-number">Card number</label>
                  <div className="split-input d-flex gap-3">
                    <input
                      className="w-25"
                      type="text"
                      name="card-number"
                      id="card-number-input1"
                      maxLength={4}
                    />
                    <input
                      className="w-25"
                      type="text"
                      name="card-number"
                      id="card-number-input2"
                      maxLength={4}
                    />
                    <input
                      className="w-25"
                      type="text"
                      name="card-number"
                      id="card-number-input3"
                      maxLength={4}
                    />
                    <input
                      className="w-25"
                      type="text"
                      name="card-number"
                      id="card-number-input4"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between w-100 gap-3">
                  <section className="input-container month-year-container">
                    <label>Expiration date</label>
                    <div>
                      <select
                        className="expiration-date-month"
                        name="expiration-date-month"
                        id="expiration-date-month"
                      >
                        <option value="">Month</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                      <select
                        className="expiration-date-year"
                        name="expiration-date-year"
                        id="expiration-date-year"
                      >
                        <option value="">Year</option>
                        <option value="">2025</option>
                        <option value="">2026</option>
                        <option value="">2027</option>
                        <option value="">2028</option>
                        <option value="">2029</option>
                        <option value="">2030</option>
                        <option value="">2031</option>
                        <option value="">2032</option>
                        <option value="">2033</option>
                        <option value="">2034</option>
                      </select>
                    </div>
                  </section>

                  <section className="d-flex flex-column gap-2 align-items-start cvv-container">
                    <label htmlFor="cvv" className="text-uppercase cvv-code">
                      cvv
                    </label>
                    <input
                      className="w-100"
                      type="text"
                      name="cvv"
                      id="cvv"
                      maxLength={3}
                    />
                  </section>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    name="store-next-payment"
                    id="store-next-payment"
                  />
                  <label htmlFor="store-next-payment">
                    Securely store payment for next purchase.
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-5 finish-purchase-container">
            <a
              href=""
              title="Finish purhase"
              className="buy-product text-uppercase"
            >
              Finish purchase
            </a>
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
