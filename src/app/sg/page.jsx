export default function StyleGuide() {
  return (
    <>
      <div className="m-5">
        <div className="mb-5">
          <h1 className="mb-4">Anchors</h1>

          <div>
            <h3 className="mb-3">Mobile version</h3>

            <div className="d-flex gap-3 mb-3 align-items-center border border-solid border-3 p-5">
              <a
                href="/"
                title="Add to wish list"
                className="button button-primary-outline button-wish-list"
              >
                <span className="position-relative">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-heart"></i>
                </span>
              </a>

              <a
                href="/"
                title="View all products"
                className="button button-primary-outline button-all-products"
              >
                view all
              </a>

              <a
                href="/"
                title="Check out what's new!"
                className="button button-primary-outline button-new-products"
              >
                New In
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3">Desktop version</h3>

            <div className="d-flex gap-3 mb-3 align-items-center border border-solid border-3 p-5">
              <a
                href="/"
                title="Add to wish list"
                className="button button-primary-outline button-wish-list-lg"
              >
                <span className="position-relative">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-heart d-none d-lg-inline"></i>
                </span>
              </a>

              <a
                href="/"
                title="View all products"
                className="button button-primary-outline button-all-products-lg"
              >
                view all
              </a>
            </div>
          </div>
        </div>

        <div>
          <h1 className="mb-4">Buttons</h1>

          <div>
            <h3 className="mb-3">Mobile version</h3>

            <div className="d-flex gap-3 mb-3 align-items-center border border-solid border-3 p-5">
              <button
                type="button"
                title="Add to wish list"
                className="button button-primary-outline button-wish-list position-relative"
              >
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-heart"></i>
              </button>

              <button
                type="button"
                title="View all products"
                className="button button-primary-outline button-all-products"
              >
                view all
              </button>

              <button
                type="button"
                title="Check out what's new!"
                className="button button-primary-outline button-new-products"
              >
                New In
              </button>

              <button
                type="submit"
                title="Check out what's new!"
                className="button button-primary-outline button-subscribe"
              >
                Submit
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-3">Desktop version</h3>

            <div className="d-flex gap-3 mb-3 align-items-center border border-solid border-3 p-5">
              <button
                type="button"
                title="Add to wish list"
                className="button button-primary-outline button-wish-list-lg position-relative"
              >
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-heart d-none d-lg-inline"></i>
              </button>

              <button
                type="button"
                title="View all products"
                className="button button-primary-outline button-all-products-lg"
              >
                view all
              </button>

              <button
                type="submit"
                title="Check out what's new!"
                className="button button-primary-outline button-subscribe"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
