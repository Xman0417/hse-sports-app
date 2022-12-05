//This component displays the News Tab. This has links to the SSN Site, their live stream, and
//the HSE Athletic website. It is triggered by the far left button on the bottom bar. This, however,
//is done through MainContent.js. This component is mostly just HTML with styling.
//Left as own component in case something more can be done other than just links in the future 
//such as an API being available to link to most recent news stories.
function News(){

    return(
        <div style={{textAlign: "center"}}>
            <h1 style={{fontSize:"60px"}}>News</h1>
                <h3><a href="https://www.hsenews.com/category/ssn/"style ={{fontSize: "40px"}}>Southeastern Sports Network</a></h3>
                <p style={{margin: "0px", fontSize: "24px"}}>The student run source of HSE Sports News.</p>
                <a style={{margin: "2px", fontSize: "28px"}} href="https://www.hsenews.com/live-stream/">Watch Live Games</a>
                <p> <br /><br /></p>
                <h3><a href="https://hseroyalsathletics.com/" style ={{fontSize: "40px"}}>HSE Royals Athletics</a></h3>
                <p style={{margin: "0px", fontSize: "24px"}}>The official athletics website of HSE High School. Run by the Athletic Department.</p>
            
            
        </div>
    );
    
}
export default News;
