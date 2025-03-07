import Nav from '../Components/Nav/Nav.jsx'
import BgBanner from "../Components/Banner/Banner.jsx"
import Explore from "../Components/Explore/Explore.jsx"
import Subs from "../Components/Subscribe/Subscribe.jsx"
import HighLight from "../Components/Highlight/Highlight.jsx"
import Feedback from '../Components/FeedbackSlider/FeedBack.jsx';
import Blog from "../Components/BlogPost/Blog.jsx"

export default function Control(){
    return(
        <>
          <div className="boxcar-wrapper">
              <Nav/>
           <BgBanner/>
            <Explore/> 
             <Subs/>
            {/* <HighLight/>
            <Feedback/> */}
           {/* <Blog/>
            <Footer/> */}

</div>
        </>
    )
}