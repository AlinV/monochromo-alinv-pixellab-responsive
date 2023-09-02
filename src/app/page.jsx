import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <header className="header">
        <Header></Header>
      </header>

      <main className="content"></main>

      <footer className="footer mt-5">
        <Footer></Footer>
      </footer>
    </>
  );
}
