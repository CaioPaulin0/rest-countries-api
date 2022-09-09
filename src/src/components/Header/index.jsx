import { useEffect } from "react"
import { useState } from "react"
import "./Header.css"

const Header = () => {

    const [value, setValue] = useState(true)

    function click(){
        setValue(!value)
    }

    useEffect(() => {
        if(value === false){
            document.documentElement.style.setProperty('--bgColor', '#ffffff');
            document.documentElement.style.setProperty('--ElementColor', '#ffffff');
            document.documentElement.style.setProperty('--white', '#060606');
            document.documentElement.style.setProperty('--grey', '#2c2c2c');
        }
        else{
            document.documentElement.style.setProperty('--bgColor', '#202c37');
            document.documentElement.style.setProperty('--ElementColor', '#2b3945');
            document.documentElement.style.setProperty('--white', '#ffffff');
            document.documentElement.style.setProperty('--grey', '#c9c9c9');
        }
    }, [value])

    return (
        <header className="header">
            <div className="headerContainer">
            <p>Where in the world?</p>
            <span onClick={click}><i class="fa-solid fa-moon"></i> Dark Mode</span>
            </div>
        </header>
    )
}

export default Header