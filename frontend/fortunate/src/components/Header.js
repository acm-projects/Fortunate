import Button from "./Button"
import TopButton from "./TopButton"
const Header = () => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1 className='logo'>Fortunate</h1>
            <Button text ='About' onClick={onClick}/>
            <Button text ='Virtual Market'/>
            <Button text ='Courses'/>
            <Button text ='Contact'/>
            <TopButton width = '250px' text ='Sign Up'/>
            <TopButton width = '250px' text ='Login'/>
        </header>
    )
}

export default Header
