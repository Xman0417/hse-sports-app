import React from "react";
import Credits from "./Credits";
import News from "./News";
import Scores from "./Scores";
import Tweets from "./Tweets";

function MainContent(props){
    console.log(props.screen);
    if(props.screen === 1){
        return(
            <Scores />
        );
    }else if(props.screen === 2){
        return(
            <Tweets />
        );
    }else if (props.screen === 3){
        return(
            <News />
        );
    }else if(props.screen === 4){
        return(
            <Credits />
        );
    }else{
        return(
            <p>This should not appear.</p>
        );
    }
    
}
export default MainContent;