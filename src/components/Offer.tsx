import Card from "../components/ui/Card";
import OfferData from "../app/StaticData";

const Offer = () => {
  return (
    <div className="flex flex-col items-center text-center mt-10 md:mt-14">
      <h2 className="font-semibold text-2xl md:text-4xl">Why book with Us?</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-8">
        {OfferData.map((item) => (
          <div
            key={item.Title}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Card
              Icon={"/globe.svg"}
              Title={item?.Title}
              SubTitle={item?.Subtitle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
