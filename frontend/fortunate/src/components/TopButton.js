import PropTypes from 'prop-types'

const TopButton = ({color, text, width, onClick}) => {

    return (
            <topbutton style={{width: width, color: color}} className ='topbutton'>{text}</topbutton>

    )


}

TopButton.defaultProps = {
    color: 'gainsboro'
}

TopButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default TopButton
