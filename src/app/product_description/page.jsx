'use client';

import CatalogPreview from '@/components/catalog/CatalogPreview';
import { menProducts } from '@/components/catalog/productData';
import Footer from '@/components/common/FooterMain';
import Header from '@/components/common/HeaderOtherPages';

export default function ProductDescription() {
  const [product] = menProducts;
  const { imageSrc, altSrc, heading, price } = product;
  return (
    <>
      <header className="header2">
        <Header></Header>
      </header>

      <main className="product-description container">
        <section className="product-description-content d-flex flex-column flex-lg-row">
          <div className="product-picture">
            <header className="mb-2 mb-lg-4">
              <picture>
                <img src={imageSrc} alt={altSrc} />
              </picture>
            </header>

            <div className="carousel d-flex mb-2 mb-lg-4">
              <button type="button" className="d-none d-lg-inline">
                <i class="fa-solid fa-arrow-left"></i>
              </button>

              <ul className="d-flex gap-2 gap-lg-4">
                {menProducts.map((product, index) => (
                  <li key={index}>
                    <picture>
                      <img src={product.imageSrc} alt={product.altSrc} />
                    </picture>
                  </li>
                ))}
              </ul>

              <button type="button" className="d-none d-lg-inline">
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <footer>
              <a href="/product_description" title="View full size image">
                View full size image
              </a>
            </footer>
          </div>

          <div className="product-costumization">
            <header>
              <h1>
                {heading} - ${price}
              </h1>
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

                  <a href="/shopping_cart" title="Go to checkout">
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
              <a href="/category_page" title="Check out similar watches">
                You may also like
              </a>
            </h1>
          </header>

          <CatalogPreview productTiles={menProducts}></CatalogPreview>
        </section>

        <section className="product-description-catalog-preview">
          <header>
            <h1>
              <a href="/category_page" title="Recently view">
                Recently view
              </a>
            </h1>
          </header>

          <CatalogPreview productTiles={menProducts}></CatalogPreview>
        </section>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
