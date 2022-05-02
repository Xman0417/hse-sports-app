import React from "react";
import Credits from "./Credits";
import News from "./News";
import Scores from "./Scores";
import Tweets from "./Tweets";

//This component controls the content that is displayed. This entirely depends on the "screen" prop which
//it takes in from App.js, which is set through NavButtons.js. By default, props.screen is set to 1.
//NOTE: The bottom bar does not directly correlate with the order that props.screen changes to

function MainContent(props){
    if(props.screen === 1){
        //IF props.screen - the variable passed in - is 1 - it sets the content to
        //the component in Scores.js
        return(
            <Scores />
        );
    }else if(props.screen === 2){
        //IF props.screen is 2, it sets the content to the component in Tweets.js
        return(
            <Tweets />
        );
    }else if (props.screen === 3){
        //IF props.screen is 3, it sets the content to the component in News.js
        return(
            <News />
        );
    }else if(props.screen === 4){
        //IF props.screen is 4, it sets the content to the component in Credits.js
        return(
            <Credits />
        );
    }else{
        //Absolute fall back option. Should not ever appear, unless part of the site somehow breaks.
        return(
            <p>This should not appear.</p>
        );
    }
    
}
export default MainContent;