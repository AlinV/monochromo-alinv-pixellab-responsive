export default function Footer() {
  return (
    <>
      <div className="footer-inner">
        <div className="footer-contact d-none d-lg-block">
          <section className="footer-contact-inner d-lg-flex flex-column gap-2">
            <a href="tel:+44(0)1023456789" title="Contact Us by Phone!">
              <span className="d-lg-block mb-2">Call us</span> +44(0)1023456789
            </a>

            <a href="mailto:monochrome@gmail.com" title="Contact Us by Mail!">
              Email Customer Care
            </a>
          </section>
        </div>

        <div className="footer-nav">
          <section className="footer-nav-inner container">
            <header>
              <h1 className="d-block d-lg-none">How can we help?</h1>
            </header>

            <div className="d-flex justify-content-center d-lg-grid footer-nav-content">
              <ul className="d-flex d-lg-block flex-column gap-3">
                <li>
                  <a href="/" title="Style & Fitt Advice">
                    <span className="d-lg-none">Style and Fit</span>

                    <span className="d-none d-lg-inline">
                      Style & Fit Advice
                    </span>
                  </a>
                </li>

                <li>
                  <a href="/" title="Faqs">
                    Faqs
                  </a>
                </li>

                <li>
                  <a href="/" title="Delivery">
                    Delivery
                  </a>
                </li>

                <li>
                  <a href="/" title="Exchange & Returns">
                    <span className="d-none d-lg-inline">Exchange &</span>{' '}
                    Returns
                  </a>
                </li>
              </ul>

              <ul className="d-flex d-lg-block flex-column gap-3">
                <li>
                  <a href="/" title="About Us">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="/" title="Careers">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="/" title="Affiliates">
                    Affiliates
                  </a>
                </li>

                <li>
                  <a href="/" title="Advertising">
                    Advertising
                  </a>
                </li>
              </ul>
            </div>

            <footer className="d-flex d-lg-none flex-column gap-1 justify-content-center align-items-center">
              <a href="/" title="Terms and Conditions">
                Terms & Conditions
              </a>

              <a href="/" title="Privacy and Cookies">
                Privacy & Cookies
              </a>
            </footer>
          </section>
        </div>

        <div className="footer-connect">
          <section className="footer-connect-inner container">
            <div className="footer-connect-subscribe mb-4">
              <h1 className="d-block d-lg-none mb-4">Let`s connect</h1>

              <form className="d-flex flex-column gap-4  align-items-center gap-lg-3">
                <div>
                  <label htmlFor="subscribe">
                    <span className="d-inline d-lg-none">
                      Be the first to receive exclusives offers
                    </span>

                    <span className="d-none d-lg-inline-block mb-3">
                      Sign up for our newsletter
                    </span>
                  </label>

                  <input
                    type="email"
                    name="subscribe"
                    id="subscribe"
                    placeholder="Email address"
                    required
                  />
                </div>

                <button
                  type="submit"
                  title="Subscribe"
                  className="button-subscribe"
                >
                  Submit
                </button>

                <div className="d-flex gap-2">
                  <input
                    type="checkbox"
                    name="privacy-policy"
                    id="privacy-policy"
                    required
                  />

                  <label htmlFor="privacy-policy">
                    I agree with <span>Privacy Policy</span> and i want to
                    receive emails from Monochrome
                  </label>
                </div>
              </form>
            </div>

            <div className="footer-connect-socials">
              <h1 className="d-block d-lg-none mb-4">We are highly likeable</h1>

              <ul className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-start">
                <li>
                  <a
                    href="http://www.youtube.com"
                    title="Follow us on Youbte"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="http://www.facebook.com"
                    title="Follow us on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="http://www.twitter.com"
                    title="Follow us on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="http://www.instagram.com"
                    title="Follow us on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
