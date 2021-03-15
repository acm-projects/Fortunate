import Button from "./Button"
import Buffer from "./Buffer"
import TopButton from "./TopButton"
const BodyContainer3 = () => {
    return (
        <bodyContainer3 className='BodyContainer'>
      <h2>Lessons</h2>
      <Buffer/>
      <div className='centered'>
          <p className ='BodyText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
          </div>
          <Buffer/>
      <div className='centered'>
      <TopButton width = '350px' text = "View Lessons"></TopButton>
          </div>
          <Buffer/>
       
          
        </bodyContainer3>
    )
}

export default BodyContainer3
