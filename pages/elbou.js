import React from 'react'
import Image from 'next/image';
import Head from "next/head"
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
} from 'next-share'
const elbou = () => {
    return ( <
        div >

        <
        Head >
        <
        meta name = "description"
        content = "Description of ShowTraining" / >
        <
        meta property = "og:title"
        content = { "ala" }
        /> <
        meta name = "viewport"
        content = "width=device-width, initial-scale=1" / >
        <
        meta charSet = "utf-8" / >

        <
        title > elbou < /title> <
        meta property = "og:description"
        content = { "hqkjdbkjwehbdkjewbdjvjedhgvhewgvdbefh" }
        />     <
        meta property = "og:image"
        content = { "http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" }
        /> <
        meta property = "og:url"
        content = { "https://www.orangedigitalcenters.com/programs" }
        />  <
        meta key = "twitter:title"
        property = "twitter:title"
        content = { "fablabs" }
        /> <
        meta key = "facebook:title"
        property = "facebook:title"
        content = { "elbouuu" }
        />

        <
        meta key = "facebook:description "
        property = "facebook:description"
        content = "seo ...." /
        >
        <
        meta key = "facebook:image"
        property = "facebook:image"
        content = { "http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" }
        />


        <
        /Head> <
        div style = {
            { position: "relative", width: "400px", height: "400px" } } >
        <
        Image / >
        <
        /div> <
        FacebookShareButton url = { "https://elboumhm-7krgd2m8m-elboumhm.vercel.app/elbou" }
        //hashtag="#camperstribe"
        //`className={classes.socialMediaButton}
        >
        <
        svg xmlns = "http://www.w3.org/2000/svg"
        width = "25"
        height = "25"
        viewBox = "0 0 35 35"
        className = "icon-link" >

        <
        circle cx = "20"
        cy = "20"
        r = "20"
        fill = "none" / >
        <
        path d = "M7.225,21.438V11.673h3.292L11.01,7.85H7.225V5.416c0-1.1.307-1.856,1.89-1.856h2.006V.15A27,27,0,0,0,8.181,0c-2.909,0-4.9,1.776-4.9,5.038V7.85H0v3.822H3.28v9.765H7.225"
        transform = "translate(13.962 9.34)" /
        >
        <
        /svg>              <
        /FacebookShareButton> <
        /div>


    )
}

export default elbou