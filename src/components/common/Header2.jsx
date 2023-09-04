export default function Header2() {
  return (
    <>
      <section className="header-2-secondary">
        <div className="header-2-secondary-inner container">
          <h1 className="d-none d-lg-block">
            <a href="/" title="Home Page">
              Monochrome
            </a>
          </h1>

          <section className="header-2-connect d-none d-lg-block">
            <ul className="d-none d-lg-flex align-items-center">
              <li className="icon-social">
                <a
                  href="http://www.youtube.com"
                  title="Follow us on Youbte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li className="icon-social">
                <a
                  href="http://www.facebook.com"
                  title="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li className="icon-social">
                <a
                  href="http://www.twitter.com"
                  title="Follow us on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li className="icon-social">
                <a
                  href="http://www.instagram.com"
                  title="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="tel:+44 (0)10 2345 6789" title="Call us">
                  <span className="text-uppercase">Call us</span>{' '}
                  +44(0)1023456789
                </a>
              </li>
            </ul>
          </section>

          <section className="header-2-controls d-flex justify-content-between align-items-center">
            <h1 className="d-inline-block d-lg-none">
              <a href="/" title="Home Page">
                Monochrome
              </a>
            </h1>

            <ul className="d-flex gap-lg-3">
              <li className="d-none d-lg-block">
                <form>
                  <input
                    type="text"
                    name="search-up-lg"
                    id="search-up-lg"
                    placeholder="Search"
                  />

                  <button type="submit" title="Search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>

              <li>
                <a href="/" title="User Account">
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>

              <li>
                <a href="/" title="Wish List">
                  <i class="fa-solid fa-heart"></i>
                </a>
              </li>

              <li>
                <a href="/" title="Add to Cart">
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="header-2-primary">
        <div className="header-2-primary-inner container d-none d-lg-block">
          <ul className="d-flex justify-content-between align-items-center">
            <li>
              <a href="/" title="New Arrivals">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="/" title="Brands">
                Brands
              </a>
            </li>
            <li>
              <a href="/pages/category_page" title="Men's">
                Men{"'"}s
              </a>
            </li>
            <li>
              <a href="/" title="Women's">
                Women{"'"}s
              </a>
            </li>
            <li>
              <a href="/" title="Accesories">
                Accesories
              </a>
            </li>
            <li>
              <a href="/" title="Lookbook">
                Lookbook
              </a>
            </li>
          </ul>
        </div>

        <div className="header-2-primary-search container d-lg-none position-relative">
          <button type="button" title="Menu">
            <i class="fa-solid fa-bars"></i>
          </button>

          <form>
            <input
              type="text"
              name="search-down-lg"
              id="search-down-lg"
              placeholder="Search"
            />

            <button type="submit" title="Search">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <a
            href="/"
            title="Check out what's new!"
            className="button-new-products"
          >
            New In
          </a>
        </div>

        <div className="header-2-primary-banner d-lg-none"></div>
      </section>
    </>
  );
}
