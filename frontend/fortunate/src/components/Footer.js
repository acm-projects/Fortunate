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
            <Button text ='Sign Up'/>
            <Button text ='Login'/>
            <Button text = 'Top'/>
        </footer>
    )
}

export default Footer
