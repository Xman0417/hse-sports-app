import React from "react";

import Nav from 'react-bootstrap/Nav';
import scoreboardLogo  from './icons/scoreboard.svg';
import newsLogo  from './icons/news.svg';
import creditsLogo  from './icons/credits.svg';
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
    const handleCredits = () => {
        props.setScreen(4);
    };
    return(
        <div>
            <Nav className="justify-content-center" style={{ position: 'fixed', bottom: '15px', left: '0px', right: '0px', marginTop: "20px", zIndex: "1"}}>
                
                <Button variant="outline-primary" onClick={handleNews}><img src= {newsLogo} alt="news" style = {{width: "6vh", height: "6vh"}}/></Button>
                <Button variant="outline-primary" onClick={handleTweets}><img src= {twitterLogo} alt="tweets" style = {{width: "6vh", height: "6vh"}}/></Button>
                <Button variant="outline-primary" onClick={handleScores}><img src= {scoreboardLogo} alt="scores" style = {{width: "6vh", height: "6vh"}}/></Button>
                <Button variant="outline-primary" onClick={handleCredits}><img src= {creditsLogo} alt="credits" style = {{width: "6vh", height: "6vh"}}/></Button>
            </Nav>
        </div>
    );
}

export default NavButtons;