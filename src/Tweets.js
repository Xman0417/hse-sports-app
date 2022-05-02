import useMedia from "./hooks/useMedia";
import useScript from "./hooks/useScript";
//This component displays the timeline of all tweets from HSE Sports teams, as well as HSEAthletics. 
//The source for this timeline is https://twitter.com/hsesportsapp/lists/1517144091179450368?ref_src=twsrc%5Etfw.
//Proper attribution for this list is in Credits.js, which is required for twitter if the noheader
//element is used. 
function Tweets(){
    //Sets up mobile responsiveness. Had significant issues early on with dealing with safari on mobile
    //devices. While it would work in browsers inside other apps such as instagram and snapchat, safari
    //was did not work as intended. Thus, I used the useMedia custom hook to resolve this. 
    //isMobile is true when the screen size is less than 750 pixels. Otherwise, it is false.
    const isMobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true]);

    //Uses the custom useScript hook to insert twitter's widget.js into the head
    //This, in turn, injects the widget into the anchor tag with the class name of twitter-timeline.
    useScript('https://platform.twitter.com/widgets.js');

    //Sets the height of the twitter widget based on the device.
    //If it is a mobile device, it sets the height of the twitter widget to 60% of the viewport's height
    //Otherwise, it sets it to 70% of the viewport's height. 
    var twHeight;
    if(isMobile){
        twHeight = "60vh"
    }else{
        twHeight = "70vh"
    }
    return(
        <div style={{textAlign:"center"}}>
           
            <h1 style={{fontSize: "40px"}}>Latest Tweets from HSE Sports</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                {/*The anchor tag that holds the twitter widget.
                 The two tags in data-chrome remove the header and the footer of the widget. 
                 data-width and data-height set the height and width of the widget.*/}
                <a className="twitter-timeline" data-width="70vw" data-height={twHeight} data-chrome="nofooter noheader" href="https://twitter.com/hsesportsapp/lists/1517144091179450368?ref_src=twsrc%5Etfw">Loading...</a>
            </div>
        </div>
    );
    

}
export default Tweets;
