import useScript from "./hooks/useScript";

function Scores(){
    useScript('https://scorestream.com/apiJsCdn/widgets/embed.js');
    var insertedScript = document.getElementById("scorestream-vertScoreboard");
    console.log (insertedScript);
    if(insertedScript !== null){
        document.getElementsByTagName('head')[0].removeChild(insertedScript);
    }
    return(
        
        <div>
            
            <h2>Scores</h2>
            
            <div className="scorestream-widget-container" data-ss_widget_type="vertScoreboard" style={{height:"400px"}} data-user-widget-id="49107"></div>
            <p>NOTE: This may not be the most updated - please check the TWEETS section for the most up to date information.</p>

        </div>
    );
    
  // rest of your component
}
export default Scores;

//Similar for Tweets Component. Just use 
//https://platform.twitter.com/widgets.js - link
//<a className="twitter-timeline" data-width="700" data-height="550" href="https://twitter.com/HSEAthletics?ref_src=twsrc%5Etfw">Tweets by TwitterDev</a> - tweets

//<div class="scorestream-widget-container" data-ss_widget_type="vertScoreboard" style="height:600px;" data-user-widget-id="49107"></div>
//<script async="async" type="text/javascript" src="https://scorestream.com/apiJsCdn/widgets/embed.js"></script>