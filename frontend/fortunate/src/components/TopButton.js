import PropTypes from 'prop-types'

const TopButton = ({text, width, onClick}) => {

    return (
            <topbutton style={{width: width}} className ='topbutton'>{text}</topbutton>

    )


}

TopButton.defaultProps = {
    color: '#c2bc91'
}

TopButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default TopButton
