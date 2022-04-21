import React from "react";
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
    }else{
        return(
            <p>This should not appear.</p>
        );
    }
    
}
export default MainContent;