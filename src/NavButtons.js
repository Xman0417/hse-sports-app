import React from "react";
//Imports bootstrap components to make life easier
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

//Imports svg files to be placed on top of buttons to denote what each button does.
import scoreboardLogo  from './icons/scoreboard.svg';
import newsLogo  from './icons/news.svg';
import creditsLogo  from './icons/credits.svg';
import twitterLogo from './icons/twitter.svg';

//This component has the navigation bar at the bottom of the screen in order to change what
//is currently being rendered. setScreen is passed in from App.js. By doing this, it allows the 
//buttons on this nav bar to change the screen when clicked. 


function NavButtons(props){
    //On Click Functions for the buttons.
    const handleScores = () => {
        //When the button that has the Scoreboard logo is clicked, the screen is set to 1.
        //This sets the screen of the main content to the component in Scores.js
        props.setScreen(1);
    }
    const handleTweets = () => {
        //When the button that has the Twitter logo is clicked, the screen is set to 2.
        //This sets the screen of the main content to the component in Tweets.js
        props.setScreen(2);
    }
    const handleNews = () => {
        //When the button that has the News logo is clicked, the screen is set to 3.
        //This sets the screen of the main content to the component in News.js
        props.setScreen(3);
    }
    const handleCredits = () => {
        //When the button that has the logo of the people is clicked, the screen is set to 4.
        //This sets the screen of the main content to the component in Credits.js
        props.setScreen(4);
    };
    return(
        <div>
            
            <Nav 
                className="justify-content-center" 
                style={{
                /*Styling that fixes the position of the nav bar to the bottom of the screen
                 in a consistent location */ 
                position: 'fixed', bottom: '15px', left: '0px', right: '0px', marginTop: "20px", zIndex: "1"}}
            >
                {/*The Buttons that change the screen. Goes in the order
                 of News, Tweets, Scores, Credits from left to right. */}
                <Button variant="outline-primary" onClick={handleNews}><img src= {newsLogo} alt="news" style = {{width: "6vh", height: "6vh"}}/></Button>
                <Button variant="outline-primary" onClick={handleTweets}><img src= {twitterLogo} alt="tweets" style = {{width: "6vh", height: "6vh"}}/></Button>
                <Button variant="outline-primary" onClick={handleScores}><img src= {scoreboardLogo} alt="scores" style = {{width: "6vh", height: "6vh"}}/></Button>
                <Button variant="outline-primary" onClick={handleCredits}><img src= {creditsLogo} alt="credits" style = {{width: "6vh", height: "6vh"}}/></Button>
            </Nav>
        </div>
    );
}

export default NavButtons;