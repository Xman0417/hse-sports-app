
import useScript from "./hooks/useScript";

function Tweets(){
    useScript('https://platform.twitter.com/widgets.js');
    
    return(
        <div>
           
            
            <a className="twitter-timeline" data-width="700" data-height="480" href="https://twitter.com/hsesportsapp/lists/1517144091179450368?ref_src=twsrc%5Etfw">HSE Sports Twitter List</a>
            
        </div>
    );
    
}
export default Tweets;

//<a class="twitter-timeline" href="https://twitter.com/xman0417/lists/1512592955579768836?ref_src=twsrc%5Etfw">A Twitter List by xman0417</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>