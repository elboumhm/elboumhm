import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { FacebookShareButton } from 'next-share'
const elbou = () => {
    const Color = () => {
        return <div style = {
            { backgroundColor: 'red' } } > hello < /div>
    }
    return ( <
        div >
        <
        FacebookShareButton url = { 'https://elboumhm-7krgd2m8m-elboumhm.vercel.app/elbou' }
        //hashtag="#camperstribe"
        //`className={classes.socialMediaButton}
        >
        <
        svg xmlns = 'http://www.w3.org/2000/svg'
        width = '25'
        height = '25'
        viewBox = '0 0 35 35'
        className = 'icon-link' >
        <
        circle cx = '20'
        cy = '20'
        r = '20'
        fill = 'none' / >
        <
        path d = 'M7.225,21.438V11.673h3.292L11.01,7.85H7.225V5.416c0-1.1.307-1.856,1.89-1.856h2.006V.15A27,27,0,0,0,8.181,0c-2.909,0-4.9,1.776-4.9,5.038V7.85H0v3.822H3.28v9.765H7.225'
        transform = 'translate(13.962 9.34)' /
        >
        <
        /svg>{' '} <
        /FacebookShareButton>{' '} <
        /div>
    )
}

export default elbou