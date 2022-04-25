function News(){

    return(
        <div style={{textAlign: "center"}}>
            <h1>News</h1>
            <div className="ssn" style={{display: "flex", justifyContent: "center", width: "400px", margin: "auto", border: "2px solid black"}}>
                <h3><a href="https://www.hsenews.com/category/ssn/"style ={{textAlign: "center", fontStyle: "italic"}}>Southeastern Sports Network</a></h3>
            </div>
            <div className="hsera" style={{display: "flex", justifyContent: "center", width: "400px", margin: "auto", marginTop:"10px", border: "1px solid black"}}>
                <h3><a href="https://hseroyalsathletics.com/">HSE Royals Athletics</a></h3>
            </div>
            
        </div>
    );
    
}
export default News;
