//Imports two hooks that help with the scorestream widget and movile compatibility.
import useScript from "./hooks/useScript";
import useMedia from "./hooks/useMedia";
//The Component that deals with the Scores of school sports. This involves a widget from scorestream.com,
//which has a very particular embedding function. 
function Scores(){
    //Sets up mobile responsiveness. Had significant issues early on with dealing with safari on mobile
    //devices. While it would work in browsers inside other apps such as instagram and snapchat, safari
    //was did not work as intended. Thus, I used the useMedia custom hook to resolve this. 
    //isMobile is true when the screen size is less than 750 pixels. Otherwise, it is false.
    const isMobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true]);

    //Uses the UseScript hook to embed the Scoreboard widget from scorestream.
    useScript('https://scorestream.com/apiJsCdn/widgets/embed.js');

    //Because Scorestream's embed.js has a section that only injects the widget if the separate
    //function that injected the widget was not present, this next part is mandatory in order for the widget
    //appear during conditional rendering.

    //This creates a variable equal to the element of the function that inserts the scoreboard.
    //If this function is present, then it is removed. 
    //The scoreboard's functionality is UNCHANGED - this is to ensure the scoreboard will reload when
    //switching from one content screen to another (ie. switching from Scores to Tweets)
    let insertedScript = document.getElementById("scorestream-vertScoreboard");
    if(insertedScript !== null){
        document.getElementsByTagName('head')[0].removeChild(insertedScript);
    }

    return(
        
        <div>
            {/*Div that scorestream's embed function targets. The width and the height of this div determine
            the width and the height of the scoreboard */}
            <div 
            className="scorestream-widget-container" 
            data-ss_widget_type="vertScoreboard" 
            style={{/*This conditional rendering statement determines the height of the widget based on the 
            device. If it is a mobile device, the height is 70% of the viewport's height. Otherwise, the
            height is 80% of the viewport's height*/ height: isMobile ? "70vh" : "80vh"}} 
            data-user-widget-id="49107">

            </div>
            <p style={{fontSize:"8pt"}}>NOTE: This may not be the most updated - please check the TWEETS section for the most up to date information.</p>

        </div>
    );
    
  
}
export default Scores;

