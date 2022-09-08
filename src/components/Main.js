import "../App.css";
import Skills from '../Skills';
import About from "./About";
import Achivements from "./Achivements";
import Footer from "./Footer";
import Me from "./Me";
import Resume from "./Resume";
import Tweets from "./Tweets";
function Main() {
    return (
        <>
            <About />
            <Me />
            <Resume />
            <Achivements/>
            <Skills />
            {/* <Tweets/> */}
            <Footer />
        </>
    )
}

export default Main