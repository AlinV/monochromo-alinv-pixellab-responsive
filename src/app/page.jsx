import CatalogPreview from '@/components/catalog/CatalogPreview';
import {
  menProducts,
  mlProducts,
  nsProducts,
  womenProducts,
} from '@/components/catalog/productData';
import FooterMain from '@/components/common/FooterMain';
import HeaderMain from '@/components/common/HeaderMain';
import HomeContent from '@/components/home/HomeContent';

export default function Home() {
  return (
    <>
      <header className="header">
        <HeaderMain></HeaderMain>
      </header>

      <main className="content-main container my-4 mb-lg-4 mt-lg-5">
        <section className="home-catalog-preview">
          <header className="home-catalog-preview-header">
            <h1>
              <a href="/" title="Check out our Colection">
                <span className="d-block d-lg-none">Spring Colection</span>

                <span className="d-none d-lg-block">New Stuff</span>
              </a>
            </h1>
          </header>

          <CatalogPreview productTiles={nsProducts} />

          <footer className="footer-catalog-preview">
            <a
              href="/"
              title="View all products"
              className="button button-primary-outline button-all-products d-inline-block d-lg-none"
            >
              view all
            </a>

            <a
              href="/"
              title="View all products"
              className="button button-primary-outline button-all-products-lg d-none d-lg-inline-block"
            >
              view all
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview">
          <header className="home-catalog-preview-header">
            <h1>
              <a href="/" title="Check out our Colection">
                <span className="d-block d-lg-none">Best Reviewed</span>

                <span className="d-none d-lg-block">Most Loved</span>
              </a>
            </h1>
          </header>

          <CatalogPreview productTiles={mlProducts}></CatalogPreview>

          <footer className="footer-catalog-preview">
            <a
              href="/"
              title="View all products"
              className="button button-primary-outline button-all-products d-inline-block d-lg-none"
            >
              view all
            </a>

            <a
              href="/"
              title="View all products"
              className="button button-primary-outline button-all-products-lg d-none d-lg-inline-block"
            >
              view all
            </a>
          </footer>
        </section>

        <section className="home-content d-flex flex-column flex-lg-row align-items-lg-center">
          <HomeContent></HomeContent>
        </section>

        <section className="home-catalog-preview">
          <header className="home-catalog-preview-header">
            <h1 className="header-text-transform">
              <a href="/category_page" title="Check out our Colection">
                Men{"'"}s
              </a>
            </h1>
          </header>

          <CatalogPreview productTiles={menProducts}></CatalogPreview>

          <footer className="footer-catalog-preview">
            <a
              href="/category_page"
              title="View all products"
              className="button button-primary-outline button-all-products d-inline-block d-lg-none"
            >
              view all
            </a>

            <a
              href="/category_page"
              title="View all products"
              className="button button-primary-outline button-all-products-lg d-none d-lg-inline-block"
            >
              view all
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview">
          <header className="home-catalog-preview-header">
            <h1 className="header-text-transform">
              <a href="/" title="Check out our Colection">
                Women{"'"}s
              </a>
            </h1>
          </header>

          <CatalogPreview productTiles={womenProducts}></CatalogPreview>

          <footer className="footer-catalog-preview">
            <a
              href="/"
              title="View all products"
              className="button button-primary-outline button-all-products d-inline-block d-lg-none"
            >
              view all
            </a>

            <a
              href="/"
              title="View all products"
              className="button button-primary-outline button-all-products-lg d-none d-lg-inline-block"
            >
              view all
            </a>
          </footer>
        </section>
      </main>

      <footer className="footer">
        <FooterMain></FooterMain>
      </footer>
    </>
  );
}
