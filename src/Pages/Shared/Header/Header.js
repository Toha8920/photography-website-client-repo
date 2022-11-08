import { Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }


    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar

                    active={true}
                >
                    <Link to='/'> Home</Link>
                </Navbar>
                <Navbar>
                    <Link to='/services'>Services</Link>
                </Navbar>
                <Navbar>
                    <Link to='/blog'>Blog</Link>
                </Navbar>

                {
                    user?.email ?
                        <>
                            <Navbar>
                                <Link to='/addServices'>Add services</Link>
                            </Navbar>
                            <Navbar className='font-semibold'>
                                <button onClick={handleLogOut} className='btn-ghost'>Log Out</button>
                            </Navbar>
                        </>
                        :
                        <>
                            <Navbar className='font-semibold'><Link to='/login'>Login</Link></Navbar>
                            <Navbar className='font-semibold'><Link to='/signup'>Sign Up</Link></Navbar>
                        </>
                }

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;