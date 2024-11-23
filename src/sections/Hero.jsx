import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants/constants";
import { bigShoe1 } from "../assets/images";

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
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px">
          <span className="relative z-10 pr-10 Xl:bg-white xl:whitespace-nowrap">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mt-6 text-lg leading-8 font-montserrat text-slate-gray mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals,quality comfort , and innovation for
          your active life.
        </p>
        <Button label="ShopNow" iconURL={arrowRight} />
        <div className="flex flex-wrap items-start justify-start w-full gap-16 mt-20">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*    for image */}
      <div className="relative flex justify-center flex-1 bg-center item-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero">
        <img
          src={bigShoe1}
          alt="bigShoeImage"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />
        <div>
          {shoes.map((shoe, index) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={() => {}}
                bigShoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Hero;
