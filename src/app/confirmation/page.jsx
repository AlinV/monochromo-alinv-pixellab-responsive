import Footer from '@/components/common/FooterMain';
import Footer2 from '@/components/common/FooterSecondary';
import Header2 from '@/components/common/HeaderOtherPages';

export default function Confirmation() {
  return (
    <>
      <header className="header2">
        <Header2></Header2>
      </header>

      <main className="confirmation container">
        <header className="header3">
          <h1>Confirmation</h1>
        </header>

        <section className="confirmation-content">
          <ul>
            <li>
              <a href="" title="Sign in">
                Sign in
              </a>

              <span></span>
            </li>

            <li>
              <a href="" title="Shipping">
                Shipping
              </a>

              <span></span>
            </li>

            <li>
              <a href="" title="Billing">
                Billing
              </a>

              <span></span>
            </li>

            <li>
              <a href="" title="Confirmation">
                Confirmation
              </a>

              <span></span>
            </li>
          </ul>
        </section>

        <footer className="footer2">
          <Footer2></Footer2>
        </footer>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
