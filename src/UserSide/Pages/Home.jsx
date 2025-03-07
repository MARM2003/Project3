
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../Components/Nav/Nav.jsx'
import BgBanner from "../Components/Banner/Banner.jsx"
import Explore from "../Components/Explore/Explore.jsx"
import Subs from "../Components/Subscribe/Subscribe.jsx"
import HighLight from "../Components/Highlight/Highlight.jsx"
import Feedback from '../Components/FeedbackSlider/FeedBack.jsx';
import Blog from "../Components/BlogPost/Blog.jsx"
import Footer from "../Components/Footer/Footer.jsx"
export default function Home(){
    return (
        <>
            <Nav/>
            <BgBanner/>
            <Explore/> 
            <Subs/>
            <HighLight/>
            <Feedback/>
            <Blog/>
            <Footer/>
        </>
    );
}