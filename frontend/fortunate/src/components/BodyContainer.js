import Button from "./Button"
import Buffer from "./Buffer"
import TopButton from "./TopButton"
import AppIcon from "../images/fortunatelogo.png";
const BodyContainer = () => {
    return (
        <bodyContainer className='BodyContainer'>
      <h1>Fortunate</h1>
      <h2>Slogan</h2>
      <Buffer/>
      <div className='centered'>
          <img src={AppIcon} alt="coin" width="200" height="200" />
          </div>
          <Buffer/>
      <div className='centered'>
          <TopButton width = '200px' text = "Sign Up" color='gainsboro'></TopButton>
          </div>
          <Buffer/>
       
          
        </bodyContainer>
    )
}

export default BodyContainer
