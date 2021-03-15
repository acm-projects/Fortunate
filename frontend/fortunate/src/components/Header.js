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
          //  <a href="#about">About</a>
          //  <Button text ='Virtual Market'/>
            <a href="#VM">Virtual Market</a>
            <Button text ='Courses'/>
            <Button text ='Contact'/>
            <Button text ='Sign Up'/>
            <Button text ='Login'/>
        </header>
    )
}

export default Header
