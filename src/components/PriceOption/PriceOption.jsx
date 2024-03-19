import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="text-blue-950 bg-green-700 p-4 rounded-md text-center">
      <h2 className="">
        <span className="text-7xl font-bold">${price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl mt-4">{name}</h4>
      <div className="mt-4">
        {features.map((feature, idx) => (
          <div key={idx}>
            <p className="text-gray-400 flex items-center  gap-2">
              <FaCheckCircle className="text-blue-950" />
              {feature}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-4 border-2 hover:duration-500 hover:bg-green-700 hover:text-blue-950 border-blue-950 bg-blue-950 rounded-3xl px-8 py-4 text-green-700 text-xl font-bold">
        Purchase Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
