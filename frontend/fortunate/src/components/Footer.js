import Button from "./Button"
import TopButton from "./TopButton"
const Footer = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <footer className='header'>
            <h1 className='logo'>Fortunate</h1>
            <Button text ='About' onClick={onClick}/>
            <Button text ='Virtual Market'/>
            <Button text ='Courses'/>
            <Button text ='Contact'/>
            <TopButton width = '200px' text ='Sign Up'/>
            <TopButton width = '200px' text ='Login'/>
            <TopButton width = '200px'text = 'Top'/>
        </footer>
    )
}

export default Footer
