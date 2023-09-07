import Footer from '@/components/common/Footer';
import Footer2 from '@/components/common/Footer2';
import Header2 from '@/components/common/Header2';

export default function SignIn() {
  return (
    <>
      <header className="header2">
        <Header2></Header2>
      </header>

      <main className="sign-in container">
        <header className="header3">
          <h1>Sign in</h1>
        </header>

        <section className="sign-in-content">
          <ul>
            <li>
              <a href="" title="Sign in">
                Sign in
              </a>

              <span></span>
            </li>

            <li>
              <a href="/pages/shipping" title="Shipping">
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
