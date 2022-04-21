
import useScript from "./hooks/useScript";

function Tweets(){
    useScript('https://platform.twitter.com/widgets.js');
    
    return (
        <div style= "text-Align: center">
           <h1 style ={{textAlign: "center", fontStyle: "italic"}}>TWEETS</h1>
            <a className="twitter-timeline" data-width="700" data-height="400" href="https://twitter.com/HSEAthletics?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a>
            </div>
    );
    
}
export default Tweets;
