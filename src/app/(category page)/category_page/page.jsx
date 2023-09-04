import CatalogPreview from '@/components/catalog/CatalogPreview';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Header2 from '@/components/common/Header2';

export default function CategoryPage() {
  return (
    <>
      <header>
        <div className="header-2 d-none d-lg-block">
          <Header2></Header2>
        </div>

        <div className="header d-block d-lg-none">
          <Header></Header>
        </div>
      </header>

      <main className="content-cat-page container">
        <header>
          <h1>
            <a href="/category_page">Men{"'"}s</a>
          </h1>

          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the.
          </p>
        </header>

        <aside className="sort-bar">
          <ul className="sort-bar-inner d-none d-lg-grid">
            <li>
              <button
                type="button"
                title="Sort by"
                className="button button-primary-outline button-sort-by-lg"
                autoFocus
              >
                Bestsellers
              </button>
            </li>

            <li>
              <button
                type="button"
                title="Sort by"
                className="button button-primary-outline button-sort-by-lg"
              >
                $ High to low
              </button>
            </li>

            <li>
              <button
                type="button"
                title="Sort by"
                className="button button-primary-outline button-sort-by-lg"
              >
                $ Low to high
              </button>
            </li>

            <li>
              <button
                type="button"
                title="Sort by"
                className="button button-primary-outline button-sort-by-lg"
              >
                New in
              </button>
            </li>

            <li>
              <button
                type="button"
                title="Sort by"
                className="button button-primary-outline button-sort-by-lg"
              >
                White
              </button>
            </li>

            <li>
              <button
                type="button"
                title="Sort by"
                className="button button-primary-outline button-sort-by-lg"
              >
                Black
              </button>
            </li>
          </ul>

          <select class="sort-bar-select d-inline-block d-lg-none">
            <option selected>Bestsellers</option>
            <option value="1">$ High to low</option>
            <option value="2">$ Low to high</option>
            <option value="3">New in</option>
            <option value="4">White</option>
            <option value="5">Black</option>
          </select>
        </aside>

        <section>
          <CatalogPreview></CatalogPreview>
        </section>

        <section>
          <CatalogPreview></CatalogPreview>
        </section>

        <section>
          <CatalogPreview></CatalogPreview>
        </section>

        <section>
          <CatalogPreview></CatalogPreview>
        </section>

        <section>
          <CatalogPreview></CatalogPreview>
        </section>

        <section>
          <CatalogPreview></CatalogPreview>
        </section>

        <footer className="text-center">
          <a
            href="/category_page"
            title="View all products"
            className="d-inline-block d-lg-none button button-primary-outline button-all-products"
          >
            Load more
          </a>

          <a
            href="/category_page"
            title="View all products"
            className="d-none d-lg-inline-block button button-primary-outline button-all-products-lg"
          >
            Load more
          </a>
        </footer>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
