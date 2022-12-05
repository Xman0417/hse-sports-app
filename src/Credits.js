//This component displays the Credits page.
//It appears when the last button on the bottom row is clicked - the one with the icon of people on it.
//However, the way that this appears is through MainContent.js. Thus, this component is mostly just HTML
//and CSS.

function Credits(){

    return(
        <div style={{textAlign: "center"}}>
            <h1 style={{fontSize:"60px"}}>Credits</h1>
                
                <p style={{margin: "0px", fontSize: "28px"}}>
                    The HSE Sports App was developed in Software Development by: <br /> Xander Beauchamp <br /> Abhimanyu Chaddha <br /> <br />
                </p>
                <p style={{margin: "0px", fontSize: "24px"}}>Questions? Something incorrect? Other feedback? <a href="mailto: beaucxan000@hsestudents.org">Contact Us!</a><br /> <br /></p>
                
                {/*Required by Twitter - Do not remove unless you remove the "noheader" tag in Tweets.js
                 from twitter's anchor tag*/}
                <p style={{fontSize:"20px"}}>Tweets came from the <a href="https://twitter.com/i/lists/1517144091179450368?s=20">Royals Sports Twitter List created by @HSESportsApp</a></p>
            
            
        </div>
    );
    
}
export default Credits;
