import React from "react";
import { motion } from "framer-motion";
import "../styles/Tweets.css";
function Tweets() {
  return (
    <>
      <center className="title">Tweets</center>
      <motion.div
        className="tweets_container "
        initial={{ x: "-100%" }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ type: "spring", duration: 1 }}
        viewport={{ once: true }}
      >
      <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark"><p lang="en" dir="ltr">Do you want to begin your Web 3.0 journey? 👾<br/>What could be done better than constructing a project? 💻<br/><br/>This article by <a href="https://twitter.com/theviveksuthar?ref_src=twsrc%5Etfw">@theviveksuthar</a> explains how to create the Chain-Journey dApp. Check it out!<a href="https://t.co/geJSjmwyAD">https://t.co/geJSjmwyAD</a></p>&mdash; Hashnode (@hashnode) <a href="https://twitter.com/hashnode/status/1570790364054708225?ref_src=twsrc%5Etfw">September 16, 2022</a></blockquote> 
      <blockquote
          className="twitter-tweet"
          data-theme="dark"
          data-conversation="none"
        >
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/theviveksuthar?ref_src=twsrc%5Etfw">
              @theviveksuthar
            </a>{" "}
            created:
            <br />
            <br />
            1. highlight animation for profiles
            <br />
            2. publication feed
            <br />
            3. custom styling
            <br />
            <br />
            Great work 👏🏼
            <br />
            <br />
            Check it out:{" "}
            <a href="https://t.co/s9W8YqQHNk">https://t.co/s9W8YqQHNk</a>{" "}
            <a href="https://t.co/jtki1tSvfL">pic.twitter.com/jtki1tSvfL</a>
          </p>
          &mdash; Road to Web3 (@TheRoadToWeb3){" "}
          <a href="https://twitter.com/TheRoadToWeb3/status/1550331065927090179?ref_src=twsrc%5Etfw">
            July 22, 2022
          </a>
        </blockquote>{" "}
        <blockquote className="twitter-tweet v" data-theme="dark">
          <p lang="en" dir="ltr">
            He won the Hackathon! 🎉
            <br />
            <br />
            When we started{" "}
            <a href="https://twitter.com/TheRoadToWeb3?ref_src=twsrc%5Etfw">
              @TheRoadToWeb3
            </a>{" "}
            little we expected.
            <br />
            <br />
            But it’s a revolution.
            <br />
            <br />
            People are joining web3, finding jobs, in a community of more than
            10k devs:
            <br />
            <br />
            In 10 weeks, for Free.
            <br />
            <br />
            Proud of it.{" "}
            <a href="https://t.co/k8pqCpQGoX">pic.twitter.com/k8pqCpQGoX</a>
          </p>
          &mdash; Vitto Rivabella | 0xvitto.eth | vitto.lens (@VittoStack){" "}
          <a href="https://twitter.com/VittoStack/status/1552642279504072710?ref_src=twsrc%5Etfw">
            July 28, 2022
          </a>
        </blockquote>{" "}
        <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
          <p lang="en" dir="ltr">
            Vivek won his first Hackathon! 🎉
            <a href="https://twitter.com/TheRoadToWeb3?ref_src=twsrc%5Etfw">
              @TheRoadToWeb3
            </a>{" "}
            started as a simple &quot;solidity study group&quot; 3 months ago.
            <br />
            <br />
            Now, it&#39;s a movement.
            <br />
            <br />
            Devs are learning web3, making friends, finding jobs, in a community
            of more than 10k people. 10 weeks of learning, for FREE. <br />
            <br />
            So proud 🥲{" "}
            <a href="https://t.co/G2qbvCCf9L">pic.twitter.com/G2qbvCCf9L</a>
          </p>
          &mdash; thatguyonvacation (until 9/12) (@thatguyintech){" "}
          <a href="https://twitter.com/thatguyintech/status/1552690551610175488?ref_src=twsrc%5Etfw">
            July 28, 2022
          </a>
        </blockquote>{" "}
       
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </motion.div>
    </>
  );
}

export default Tweets;
