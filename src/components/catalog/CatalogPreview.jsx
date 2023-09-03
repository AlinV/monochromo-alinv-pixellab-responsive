import ProductTile from './ProductTile';

export default function CatalogPreview() {
  return (
    <>
      <ul className="catalog-preview d-flex">
        <li className="product-tile">
          <ProductTile></ProductTile>
        </li>

        <li className="product-tile">
          <ProductTile></ProductTile>
        </li>

        <li className="product-tile d-none d-lg-block">
          <ProductTile></ProductTile>
        </li>

        <li className="product-tile d-none d-lg-block">
          <ProductTile></ProductTile>
        </li>
      </ul>
    </>
  );
}
