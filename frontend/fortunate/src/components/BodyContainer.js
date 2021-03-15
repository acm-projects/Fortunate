import Button from "./Button"
import Buffer from "./Buffer"
import TopButton from "./TopButton"
const BodyContainer = () => {
    return (
        <bodyContainer className='BodyContainer'>
      <h1>Fortunate</h1>
      <h2>Slogan</h2>
      <Buffer/>
      <div className='centered'>
          <img src="../Icon_Image.svg" width='250'></img>
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
