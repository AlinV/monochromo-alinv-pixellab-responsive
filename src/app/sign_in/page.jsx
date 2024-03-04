import Footer from '@/components/common/FooterMain';
import Footer2 from '@/components/common/FooterSecondary';
import Header2 from '@/components/common/HeaderOtherPages';

export default function SignIn() {
  return (
    <>
      <header className="header2">
        <Header2></Header2>
      </header>

      <main className="sign-in container">
        <header className="header3">
          <h1>Sign in</h1>
        </header>

        <section className="sign-in-content">
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
              <a href="" title="Billing">
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

          <div className="sing-in-page-forms d-flex d-column d-lg-grid">
            <form className="form-sign-in-page form-sign-in">
              <h1>Existing customer</h1>

              <p>
                Make purchases faster using previously saved details. Track
                previous orders and easily request returns from the website.
              </p>

              <input
                type="email"
                name="email"
                id="email-sign-in"
                placeholder="email address"
                required
              />

              <input
                type="password"
                name="password"
                id="password-sign-in"
                placeholder="password"
                required
              />

              <a href="" title="Forgot password?">
                forgot password?
              </a>

              <button type="button" title="Log in to your account">
                <a href="/shipping">Sign in</a>
              </button>
              {/* button type will be change in submit later on */}
            </form>

            <form className="form-sign-in-page form-register">
              <h1>New customer</h1>

              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Full name"
                required
              />

              <input
                type="email"
                name="email-register"
                id="email-register"
                placeholder="Email address"
                required
              />

              <input
                type="password"
                name="password-register"
                id="password-register"
                placeholder="Password"
                required
              />

              <input
                type="password"
                name="confirm-password-register"
                id="confirm-password-register"
                placeholder="Confirm password"
                required
              />

              <div className="gdpr-field d-flex gap-2 justify-content-center align-items-start px-5">
                <input type="checkbox" name="GDPR" id="GDPR" className="mt-1" />

                <label htmlFor="GDPR">
                  i agree with{' '}
                  <span>
                    <a href="" title="Terms and Conditions">
                      terms and conditions
                    </a>
                  </span>{' '}
                  and GDPR{' '}
                  <span>
                    <a href="" title="Privacy Policy">
                      privacy policy
                    </a>
                  </span>
                </label>
              </div>

              <button type="button" title="Create New Account">
                <a href="/shipping">Register</a>
              </button>
              {/* button type will be change in submit later on */}
            </form>
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
