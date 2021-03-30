import PropTypes from "prop-types";

const Button = ({ color, width, text, onClick }) => {
	return (
		<button style={{ width: width, color: color }} className="btn">
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: "gainsboro",
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
