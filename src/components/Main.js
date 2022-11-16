import "../App.css";
import Skills from '../Skills';
import About from "./About";
import Achivements from "./Achivements";
import Container from "./Container";
import Footer from "./Footer";
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
            <Container/>
            {/* <Tweets /> */}
            <Footer />
        </>
    )
}

export default Main