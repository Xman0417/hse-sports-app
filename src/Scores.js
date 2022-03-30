
import useScript from './hooks/useScript';

function Scores(){
    useScript('https://scorestream.com/apiJsCdn/widgets/embed.js');
    return(
        <div>
            <h2>Tweets</h2>
            <div className="scorestream-widget-container" data-ss_widget_type="vertScoreboard" style={{height:"600px"}} data-user-widget-id="49107"></div>
        </div>
    );
    
  // rest of your component
}
export default Scores;

//Similar for Tweets Component. Just use 
//https://platform.twitter.com/widgets.js - link
//<a className="twitter-timeline" data-width="700" data-height="550" href="https://twitter.com/HSEAthletics?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a> - tweets