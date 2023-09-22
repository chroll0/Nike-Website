import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Home,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Home />
      </section>
      <section>
        <PopularProducts />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x w-full">
        <Subscribe />
      </section>
      <section className="bg-slate-700 padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
