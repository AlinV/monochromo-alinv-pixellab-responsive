'use client';
import CatalogPreview from '@/components/catalog/CatalogPreview';
import FooterMain from '@/components/common/FooterMain';
import HeaderMain from '@/components/common/HeaderMain';
import HomeContent from '@/components/home/HomeContent';
import { useState } from 'react';

export default function Home() {
  const menProducts = [
    {
      imageSrc: '/images/products/w5.png',
      imageAlt: 'Black Cluse watch with silver frame and leather strap',
      heading: 'Feroce',
      price: 425,
    },
    {
      imageSrc: '/images/products/w4.png',
      imageAlt: 'Black Cluse watch with fabric strap',
      heading: 'Minuit',
      price: 275,
    },
    {
      imageSrc: '/images/products/w6.png',
      imageAlt: 'Black Cluse watch with metal bracelet',
      heading: 'Boho Chic',
      price: 285,
    },
    {
      imageSrc: '/images/products/w7.png',
      imageAlt: 'Black Cluse complication watch with fabric strap',
      heading: 'Triomphe',
      price: 325,
    },
  ];

  const womenProducts = [
    {
      imageSrc: '/images/products/w1.png',
      imageAlt: 'White Cluse watch with gold frame and white leather strap',
      heading: 'Vigoureux',
      price: 395,
    },
    {
      imageSrc: '/images/products/w3.png',
      imageAlt: 'White Cluse watch with silver frame and white leather strap',
      heading: 'La Tetragone',
      price: 385,
    },
    {
      imageSrc: '/images/products/w1.png',
      imageAlt: 'White Cluse watch with gold frame and white leather strap',
      heading: 'Vigoureux',
      price: 395,
    },
    {
      imageSrc: '/images/products/w3.png',
      imageAlt: 'White Cluse watch with silver frame and white leather strap',
      heading: 'La Tetragone',
      price: 385,
    },
  ];

  const mlProducts = [
    {
      imageSrc: '/images/products/w5.png',
      imageAlt: 'Black Cluse watch with silver frame and leather strap',
      heading: 'Feroce',
      price: 425,
    },
    {
      imageSrc: '/images/products/w1.png',
      imageAlt: 'White Cluse watch with gold frame and white leather strap',
      heading: 'Vigoureux',
      price: 395,
    },
    {
      imageSrc: '/images/products/w7.png',
      imageAlt: 'Black Cluse complication watch with fabric strap',
      heading: 'Triomphe',
      price: 325,
    },
    {
      imageSrc: '/images/products/w3.png',
      imageAlt: 'White Cluse watch with silver frame and white leather strap',
      heading: 'La Tetragone',
      price: 385,
    },
  ];

  const nsProducts = [
    {
      imageSrc: '/images/products/w5.png',
      imageAlt: 'Black Cluse watch with silver frame and leather strap',
      heading: 'Feroce',
      price: 425,
    },
    {
      imageSrc: '/images/products/w2.png',
      imageAlt: 'Black and gray Cluse watch with leather strap',
      heading: 'Fluette',
      price: 345,
    },
    {
      imageSrc: '/images/products/w1.png',
      imageAlt: 'White Cluse watch with gold frame and white leather strap',
      heading: 'Vigoureux',
      price: 395,
    },
    {
      imageSrc: '/images/products/w7.png',
      imageAlt: 'Black Cluse complication watch with fabric strap',
      heading: 'Triomphe',
      price: 325,
    },
  ];

  const CatalogExpand = () => {
    const state = useState({ expand: false });

    const actualState = state[0];
    const setState = state[1];

    const onClick = () => {
      setState(!actualState);
    };

    return (
      <>
        {actualState ? (
          <CatalogPreview productTiles={nsProducts} />
        ) : (
          <>
            <CatalogPreview productTiles={nsProducts} />
            <CatalogPreview productTiles={nsProducts} />
            <CatalogPreview productTiles={nsProducts} />
          </>
        )}

        <footer className="footer-catalog-preview">
          <button
            type="button"
            title="View all products"
            className="button button-primary-outline button-all-products d-inline-block d-lg-none"
            onClick={onClick}
          >
            {actualState ? 'view all' : 'view less'}
          </button>

          <button
            type="button"
            title="View all products"
            className="button button-primary-outline button-all-products-lg d-none d-lg-inline-block"
            onClick={onClick}
          >
            {actualState ? 'view all' : 'view less'}
          </button>
        </footer>
      </>
    );
  };

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

          <CatalogExpand></CatalogExpand>
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
