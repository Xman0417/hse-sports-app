//This function displays the Credits page.
//It appears when the last button on the bottom row is clicked - the one with the icon of people on it.

function Credits(){

    return(
        <div style={{textAlign: "center"}}>
            <h1 style={{fontSize:"60px"}}>Credits</h1>
                
                <p style={{margin: "0px", fontSize: "28px"}}>
                    The HSE Sports App was developed by Xander Beauchamp and Abhimanyu Chaddha of Software Development. <br /> <br />
                </p>
                <p style={{margin: "0px", fontSize: "24px"}}>Questions? Something incorrect? Other feedback? <a href="mailto: beaucxan000@hsestudents.org, chaddabh000@hsestudents.org">Contact Us!</a><br /> <br /></p>
                
                {/*Required by Twitter - Do not remove unless you remove the "noheader" tag in Tweets.js from the twitter anchor tag*/}
                <p style={{fontSize:"20px"}}>Tweets came from the <a href="https://twitter.com/i/lists/1517144091179450368?s=20">Royals Sports Twitter List created by @HSESportsApp</a></p>
            
            
        </div>
    );
    
}
export default Credits;