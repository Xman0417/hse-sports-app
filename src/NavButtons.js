import React from "react";

import Nav from 'react-bootstrap/Nav';
import scoreboardLogo  from './icons/scoreboard.svg';
import newsLogo  from './icons/news.svg';
import playLogo  from './icons/playButton.svg';
import twitterLogo from './icons/twitter.svg';
import Button from 'react-bootstrap/Button';
//https://react-bootstrap.github.io/getting-started/introduction/


function NavButtons(props){
    const handleScores = () => {
        props.setScreen(1);
    }
    const handleTweets = () => {
        props.setScreen(2);
    }
    const handleNews = () => {
        props.setScreen(3);
    }
    const handleLive = () => {
        window.open("https://www.hsenews.com/live-stream/");
    };
    return(
        <div>
            <Nav className="justify-content-center">
                
                <Nav.Item><Button variant="outline-primary" onClick={handleNews}><img src= {newsLogo} alt="news" style = {{width: "50px"}}/></Button></Nav.Item>
                <Nav.Item><Button variant="outline-primary" onClick={handleTweets}><img src= {twitterLogo} alt="news" style = {{width: "50px"}}/></Button></Nav.Item>
                <Nav.Item><Button variant="outline-primary" onClick={handleScores}><img src= {scoreboardLogo} alt="scores" style = {{width: "50px"}}/></Button></Nav.Item>
                <Nav.Item><Button variant="outline-primary" onClick={handleLive}><img src= {playLogo} alt="livestream" style = {{width: "50px"}}/></Button></Nav.Item>
            </Nav>
        </div>
    );
}

export default NavButtons;