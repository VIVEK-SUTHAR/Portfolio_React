import "../App.css";
import Skills from '../Skills';
import About from "./About";
import Achivements from "./Achivements";
import Footer from "./Footer";
import Tweets from "./Tweets"
import Me from "./Me";
import Resume from "./Resume";
function Main() {
    return (
        <>
            <About />
            <Me />
            <Resume />
            <Achivements/>
            <Skills />
            {/* <Tweets /> */}
            <Footer />
        </>
    )
}

export default Main