import ScreenSize from '@components/Debug/ScreenSize';

export default function Home() {
  return (
    <div>
      <ScreenSize />
      <header>Header</header>
      <main role="main" className="main-layout">
        <section className="section-layout">
          <div className="debug">
            <h1>Next.js Tailwind CSS Starter</h1>
            <p>
              This document provides a guide to help with the important task of
              choosing the correct Apple.
            </p>
          </div>
        </section>
        <section className="section-layout">
          <div className="debug">
            <h2>Introduction</h2>
            <p>
              This document provides a guide to help with the important task of
              choosing the correct Apple.
            </p>
          </div>
        </section>
      </main>
      <footer>Footer</footer>
    </div>
  );
}
