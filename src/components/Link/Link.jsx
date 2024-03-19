import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-10 text-blue-950  hover:bg-blue-950 hover:text-green-700 font-medium hover:rounded-md px-4 hover:duration-700">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
