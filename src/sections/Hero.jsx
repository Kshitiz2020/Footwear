import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants/constants";

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col justify-center w-full gap-10 xl:flex-row main-h-screen max-container"
    >
      <div className="relative flex flex-col items-start justify-center w-full xl:w-2/5 max:xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="whitespace-nowrap>The New Arrival </span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p >
          Discover stylish Nike arrivals,quality comfort , and innovation for
          your active life.
        </p>
        <Button label="ShopNow iconURL={arrowRight}" /></h1>
        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Hero;
