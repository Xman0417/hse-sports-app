
import useScript from "./hooks/useScript";

function Tweets(){
    useScript('https://platform.twitter.com/widgets.js');
    
    return(
        <div style={{textAlign:"center"}}>
           
            <h1 style={{fontSize: "40px"}}>Latest Tweets from HSE Sports</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <a className="twitter-timeline" data-width="60vw" data-height="65vh" data-chrome="nofooter noheader" href="https://twitter.com/hsesportsapp/lists/1517144091179450368?ref_src=twsrc%5Etfw">Loading...</a>
            </div>
        </div>
    );
    

}
export default Tweets;
