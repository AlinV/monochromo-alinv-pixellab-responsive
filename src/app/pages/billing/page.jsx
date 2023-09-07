import Footer from '@/components/common/Footer';
import Footer2 from '@/components/common/Footer2';
import Header2 from '@/components/common/Header2';

export default function Billing() {
  return (
    <>
      <header className="header2">
        <Header2></Header2>
      </header>

      <main className="billing container">
        <header className="header3">
          <h1>Billing</h1>
        </header>

        <section className="billing-content">
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
              <a href="/pages/confirmation" title="Confirmation">
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
