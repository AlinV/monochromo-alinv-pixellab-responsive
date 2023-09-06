import CatalogPreview from '@/components/catalog/CatalogPreview';
import Footer from '@/components/common/Footer';
import Header2 from '@/components/common/Header2';

export default function ProductDescription() {
  return (
    <>
      <header className="header2">
        <Header2></Header2>
      </header>

      <main className="product-description container">
        <section className="product-description-content d-flex flex-column flex-lg-row">
          <div className="product-picture">
            <header className="mb-2 mb-lg-4">
              <picture>
                <img
                  src="/images/products/recently_viewed_thumbnail_2-5.png"
                  alt="Black Cluse watch with fabric strap"
                />
              </picture>
            </header>

            <div className="carousel d-flex mb-2 mb-lg-4">
              <button type="button" className="d-none d-lg-inline">
                <i class="fa-solid fa-arrow-left"></i>
              </button>

              <ul className="d-flex gap-2 gap-lg-4">
                <li>
                  <picture>
                    <img
                      src="/images/products/recently_viewed_thumbnail_2-5.png"
                      alt="Black Cluse watch with fabric strap"
                    />
                  </picture>
                </li>

                <li>
                  <picture>
                    <img
                      src="/images/products/recently_viewed_thumbnail_2-5.png"
                      alt="Black Cluse watch with fabric strap"
                    />
                  </picture>
                </li>

                <li>
                  <picture>
                    <img
                      src="/images/products/recently_viewed_thumbnail_2-5.png"
                      alt="Black Cluse watch with fabric strap"
                    />
                  </picture>
                </li>

                <li>
                  <picture>
                    <img
                      src="/images/products/recently_viewed_thumbnail_2-5.png"
                      alt="Black Cluse watch with fabric strap"
                    />
                  </picture>
                </li>
              </ul>

              <button type="button" className="d-none d-lg-inline">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <footer>
              <a href="/pages/product_description" title="View full size image">
                View full size image
              </a>
            </footer>
          </div>

          <div className="product-costumization">
            <header>
              <h1> Monochrome Max Bill - $425</h1>
            </header>

            <div className="product-costumization-content">
              <span>description</span>

              <p>
                Mr Max Bill was a true creative genius, carving out a career as
                a painter, architect, sculptor and designer. As well as leaving
                behind an expansive body of work, he was also an avid collector
                of watches, and this Junghans chronoscope timepiece is dedicated
                to his memory. Immaculately housed in a domed Plexiglass case
                and finished with a handsome leather strap, it’s a highly
                technical piece in a stylish package.
              </p>

              <div>
                <div className="select-field">
                  <select name="size and fit">
                    <option selected>size & fit</option>
                    <option value="1">38mm</option>
                    <option value="2">42mm</option>
                    <option value="3">46mm</option>
                  </select>
                </div>

                <div className="select-field">
                  <select name="details and care">
                    <option selected>details & care</option>
                    <option value="1">white</option>
                    <option value="2">black</option>
                    <option value="3">silver</option>
                  </select>
                </div>

                <div className="select-field">
                  <select name="delivery and returns">
                    <option selected>delivery & returns</option>
                    <option value="1">your address</option>
                    <option value="2">our stores</option>
                    <option value="3">secure boxes</option>
                  </select>
                </div>

                <div className="product-costumization-buttons">
                  <div className="d-none d-lg-grid mb-lg-3">
                    <input type="checkbox" name="button" id="button1" />
                    <label htmlFor="button1">Add to cart</label>

                    <input type="checkbox" name="button" id="button2" />
                    <label htmlFor="button2">Wishlist</label>
                  </div>

                  <div className="d-flex d-lg-none">
                    <button type="button">Add to cart</button>

                    <button type="button">Wishlist</button>
                  </div>

                  <a href="" title="Go to checkout">
                    Checkout
                  </a>
                </div>
              </div>
            </div>

            <footer className="product-costumization-footer">
              <a href="" title="Shipping restriction">
                Shipping restriction may apply
              </a>

              <ul className="d-flex">
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

              <ul>
                <li>
                  Product <br /> Code <br /> 668235
                </li>

                <li>
                  <a href="mailto:monochrome@gmail.com" title="Any inquriy?">
                    Send us <br />
                    custom <br />
                    inquiry
                  </a>
                </li>

                <li>
                  <a href="tel:+44(0)1023456789" title="Contact us by phone">
                    Contact us{' '}
                    <span>
                      Customer <br />
                      Service
                    </span>
                  </a>
                </li>
              </ul>
            </footer>
          </div>
        </section>

        <section className="product-description-catalog-preview">
          <header>
            <h1>
              <a href="/pages/category_page" title="Check out similar watches">
                You may also like
              </a>
            </h1>
          </header>

          <CatalogPreview></CatalogPreview>
        </section>

        <section className="product-description-catalog-preview">
          <header>
            <h1>
              <a href="/pages/category_page" title="Recently view">
                Recently view
              </a>
            </h1>
          </header>

          <CatalogPreview></CatalogPreview>
        </section>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
