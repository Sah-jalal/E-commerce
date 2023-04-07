import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenContext } from '../../../Authentication/AuthContext';

const Navber = () => {

    const { user, signOutUser } = useContext(AuthenContext);

    const handleSignOut = () => {
        signOutUser()
    }

    const menuItem = <>
        <Link className='text-xl font-bold mx-8' to={'/'}>Home</Link>
        <Link className='text-xl font-bold mx-8' to={'/'}>FlashSale</Link>
        <Link className='text-xl font-bold mx-8' to={'/'}>Card</Link>
        {
            user?.uid ? <> <button onClick={handleSignOut} className='text-xl font-bold mx-8'>SignOut</button> </> : <Link className='text-xl font-bold mx-8' to={'/login'}>Login</Link>
        }

    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItem
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            menuItem
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={'/'} className='btn'>Get started</Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;