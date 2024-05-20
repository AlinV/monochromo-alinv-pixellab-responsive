'use client';

import ProductTile from './ProductTile';

export default function CatalogPreview({ productTiles = [] }) {
  return (
    <>
      <ul className="catalog-preview d-flex">
        {productTiles.map((productSet, index) => (
          <li className="product-tile" key={index}>
            <ProductTile products={productSet}></ProductTile>
          </li>
        ))}
      </ul>
    </>
  );
}
