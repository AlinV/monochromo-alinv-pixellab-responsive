export default function ProductTile() {
  return (
    <>
      <header className="product-tile-header position-relative">
        <div>
          <a
            href="/pages/product_description"
            title="Black Cluse watch with fabric strap"
          >
            <picture>
              <img
                src="/images/products/recently_viewed_thumbnail_2-5.png"
                alt="Black Cluse watch with fabric strap"
              />
            </picture>
          </a>
        </div>

        <h1>
          <a
            href="/pages/product_description"
            title="Black Cluse watch with fabric strap"
          >
            Monochrome
          </a>
        </h1>

        <a
          href=""
          title="Add to wish list"
          className="button button-primary-outline button-wish-list d-inline d-lg-none"
        >
          <span className="position-relative">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-heart"></i>
          </span>
        </a>

        <a
          href=""
          title="Add to wish list"
          className="button button-primary-outline button-wish-list-lg d-none d-lg-inline"
        >
          <span className="position-relative">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-heart d-none d-lg-inline"></i>
          </span>
        </a>
      </header>

      <div className="product-tile-content">
        <span className="product-price">$425</span>
      </div>
    </>
  );
}
