import PropTypes from "prop-types";

const Container = ({ children, className }) => {
  return (
    <div className={`container mx-auto px-5 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
