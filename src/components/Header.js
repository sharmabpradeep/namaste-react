import { useState} from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    console.log(btnName);

    return(
        <div className='flex justify-between bg-pink-100 shadow-md'>
            <div className='logo-container'>
                <img className='w-56' src={LOGO_URL}/>
            </div>
            <div className='flex align items-center'>
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/about">About US</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact US</Link>
                    </li>
                    <li className="px-4">
                    Cart
                    </li>
                    <button className="login-btn" 
                    onClick={() => {
                        btnName==='Login'? setBtnName('Logout') : setBtnName('Login')
                    }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
        
};

export default Header;