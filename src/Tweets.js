
import useScript from "./hooks/useScript";

function Tweets(){
    useScript('https://platform.twitter.com/widgets.js');
    const fullList = "https://twitter.com/hsesportsapp/lists/1517144091179450368?ref_src=twsrc%5Etfw"
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
           
            
            <a className="twitter-timeline" data-width="700" data-height="480" data-chrome="nofooter" href={fullList}>Loading...</a>
            
        </div>
    );
    
}
export default Tweets;
