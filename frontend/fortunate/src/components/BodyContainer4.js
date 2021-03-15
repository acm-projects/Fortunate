import Button from "./Button"
import Buffer from "./Buffer"
import TopButton from "./TopButton"
const BodyContainer4 = () => {
    return (
        <bodyContainer4 className='BodyContainer'>
      <h2>Virtual Market</h2>
      <Buffer/>
      <div className='centered'>
          <p className="BodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. </p>
          </div>
          <Buffer/>
      <div className='centered'>
      <TopButton width = '500px' text = "Enter Virtual Market"></TopButton>
          </div>
          <Buffer/>


        </bodyContainer4>
    )
}

export default BodyContainer4
