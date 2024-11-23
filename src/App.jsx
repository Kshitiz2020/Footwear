import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  CustomerReviews,
  Footer,
} from "./sections";

import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
         <PopularProducts />
      </section>
      <section className="padding">
         <SuperQuality />
      </section>
      <section className="padding">
         <Services />
      </section>
      <section className="padding">
         <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
         <CustomerReviews />
      </section>
      <section className="w-full py-16 padding-x sm:py-32">
         <Subscribe />
      </section>
      <section className="padding bg-gray-950">
        <Footer />
      </section>
    </main>
  );
}
export default App;
