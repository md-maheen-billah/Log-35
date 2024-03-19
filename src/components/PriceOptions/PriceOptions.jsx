import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30,
      features: [
        "Access to cardio machines",
        "Access to weightlifting area",
        "Locker room access",
        "24/7 gym access",
        "Free parking",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50,
      features: [
        "Access to all Basic features",
        "Group fitness classes included",
        "Personal trainer consultation",
        "Nutrition counseling",
        "Equipment orientation",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 80,
      features: [
        "Access to all Standard features",
        "Sauna and steam room access",
        "Towel service included",
        "Complimentary drinks",
        "Monthly fitness challenges",
      ],
    },
  ];

  return (
    <div className="m-12 pb-12">
      <h2 className="text-5xl text-gray-400 font-medium">
        Best Prices in Town
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
