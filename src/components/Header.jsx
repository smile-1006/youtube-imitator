import React from 'react'

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "..images/yt-Logo-Mobile.png";

import {SlMenu} from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import {CgClose } from "react-icons/cg";

import { context } from '../context/contextApi';
import Loader from "../shared/loader";

const Header = () => {
    // creating states
    const [searchQuery, setSearchQuery] = useState("");

    const {loading, mobileMenu, setMobileMenu} = useContext(context);

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if((event?.key === "Enter" || event === "searchButton") && searchQuery?.lenght>0){
            navigate(`/searchResult/${searchQuery}`);
        }
    }

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    }

    const {pathname} = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0]

    return (
        <div>
            header
        </div>
    )
}

export default Header
