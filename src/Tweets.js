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
    //Otherwise, it sets it to 72% of the viewport's height.
    //Weird number - but it ensures that wide laptops dont have nav buttons blocked by twitter widget,
    //while also not leaving an excessive amount of space of more square-like screens. 
    
    //The unit "vh" standing for viewport height stopped working with the twitter widget,
    //replaced with the formula to calculate vh by taking in the default JS values for inner height, 
    //multiplying it by .7, and then converted that to pixels. 
    let twHeight;
    if(isMobile){
        twHeight = window.innerHeight*0.60 + "px";
    }else{
        twHeight = window.innerHeight*0.72 + "px";
    }
    return(
        <div style={{textAlign:"center"}}>
           
            <h1 style={{fontSize: "40px"}}>Latest Tweets from HSE Sports</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                {/*The anchor tag that holds the twitter widget.
                 The two tags in data-chrome remove the header and the footer of the widget. 
                 data-width and data-height set the height and width of the widget.
                 the element data-chrome="nofooter noheader" makes the tweets look nicer, 
                 but requires a line in the credits section to be allowed by twitter.*/}
                <a className="twitter-timeline" data-width="80vw" data-height={twHeight} data-chrome="nofooter noheader" href="https://twitter.com/hsesportsapp/lists/1517144091179450368?ref_src=twsrc%5Etfw">Loading...</a>
            </div>
        </div>
    );
    

}
export default Tweets;
