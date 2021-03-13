import PropTypes from "prop-types";

const TopButton = ({ text, width, onClick }) => {
	return (
		<button style={{ width: width }} className="Topbutton">
			{text}
		</button>
	);
};

TopButton.defaultProps = {
	color: "#c2bc91",
};

TopButton.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
};

export default TopButton;
