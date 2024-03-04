'use client';

import ProductTile from './ProductTile';
import { useEffect, useState } from 'react';

export default function CatalogPreview({ productTiles = [] }) {
  const [productToDisplay, setProductToDisplay] = useState(
    typeof window !== 'undefined' && window.innerWidth < 992
      ? productTiles.slice(0, 2)
      : productTiles,
  );

  useEffect(() => {
    const handleResize = () => {
      setProductToDisplay(
        typeof window !== 'undefined' && window.innerWidth < 992
          ? productTiles.slice(0, 2)
          : productTiles,
      );
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [productTiles]);

  return (
    <>
      <ul className="catalog-preview d-flex">
        {productToDisplay.map((productSet, index) => (
          <li className="product-tile" key={index}>
            <ProductTile products={productSet}></ProductTile>
          </li>
        ))}
      </ul>
    </>
  );
}
