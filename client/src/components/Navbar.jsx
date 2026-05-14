import {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {assets} from '../assets/assets.js'
import { useClerk, UserButton, useUser } from "@clerk/react";
import { useNavigate } from 'react-router-dom';
 

const BookingIcon = () =>{
    return(
    <svg  className="w-4 h-4" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M78.8,62.1l-3.6-1.7c-0.5-0.3-1.2-0.3-1.7,0L52,70.6c-1.2,0.6-2.7,0.6-3.9,0L26.5,60.4 c-0.5-0.3-1.2-0.3-1.7,0l-3.6,1.7c-1.6,0.8-1.6,2.9,0,3.7L48,78.5c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7C80.4,65,80.4,62.8,78.8,62.1z"></path> </g> <g> <path d="M78.8,48.1l-3.7-1.7c-0.5-0.3-1.2-0.3-1.7,0L52,56.6c-1.2,0.6-2.7,0.6-3.9,0L26.6,46.4 c-0.5-0.3-1.2-0.3-1.7,0l-3.7,1.7c-1.6,0.8-1.6,2.9,0,3.7L48,64.6c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7C80.4,51.1,80.4,48.9,78.8,48.1 z"></path> </g> <g> <path d="M21.2,37.8l26.8,12.7c1.2,0.6,2.7,0.6,3.9,0l26.8-12.7c1.6-0.8,1.6-2.9,0-3.7L51.9,21.4 c-1.2-0.6-2.7-0.6-3.9,0L21.2,34.2C19.6,34.9,19.6,37.1,21.2,37.8z"></path> </g> </g> </g></svg>
)
}

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Artworks', path: '/artworks' },
        { name: 'Orders', path: '/orders' },
        { name: 'Profile', path: '/profile' },
    ];

    const navigate = useNavigate();
    // const location = useLocation()

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {openSignIn} = useClerk()
    const {user} = useUser()

    useEffect(() => {

        if(location.pathname !== '/'){
            setIsScrolled(true)
        }else{
            setIsScrolled(false)
        }

        setIsScrolled((prev)=> location.pathname !== '/' ? true : prev )

        const handleScroll = () => {
            setIsScrolled(window.scrollY>10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-primary/80 shadow-md text-white backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                <Link  to="/">
                        <img src={assets.logoWithoutBg1} className={`w-50 ${isScrolled && "invert-opacity-80"} transition-all duration-500`} />
                </Link>

                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-white" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-white" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-white' : 'text-white'} transition-all`} onClick={()=> navigate('/owner')}>
                       Dashboard
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-4">
                  {/* <div className={`w-10 text-white ${isScrolled && 'invert '}`}>
                    <FaSearch />
                  </div> */}

                  {user? (<UserButton>
                      <UserButton.MenuItems>
                        <UserButton.Action label='My Bookings' labelIcon={<BookingIcon/>} onClick={() => navigate('/my-bookings')} />
                      </UserButton.MenuItems>
                  </UserButton>) :
                  
                    <button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>}
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </div>

                {/* Mobile Menu */}

                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>

                      {user && (<UserButton>
                      <UserButton.MenuItems>
                        <UserButton.Action label='My Bookings' labelIcon={<BookingIcon/>} onClick={() => navigate('/my-bookings')} />
                      </UserButton.MenuItems>
                  </UserButton>)}

                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                 { user &&   <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all" onClick={()=> navigate('/owner')}>
                        Dashboard
                    </button>}

                   {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>
    );
}

export default Navbar;