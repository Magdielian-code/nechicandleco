import { About } from "./home/about";
import { Hero } from "./home/hero";
import { Products } from "./home/products";
import { SaleShowcase } from "./home/sale";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <SaleShowcase />
    </>
  );
}
