import "../assets/galleryWall.css";
export default function GalleryWall(){
    return(<>
    <galleryContainer >
        <div className="galleryRow">
            <div className="content"> 
                <div className="galleryImg"></div>
                <div className="galleryTitle">
                    <h3>Clothing</h3>
                    <div className="ItemNumber">5</div>
                </div>
            </div>
            <div className="content"> 
                <div className="galleryImg"></div>
                <div className="galleryTitle">
                    <h3>Clothing</h3>
                    <div className="ItemNumber">5</div>
                </div>
            </div>
        </div>
        <div className = "countdown" >
            <div className="countdownImg"></div>
            <div className="countdownContent">
                <h1> Sale for this fall starts in </h1>
                <div className = "countdownRow" >
                    <div>
                        <h1>00</h1>
                        <h5>WEEKS</h5>
                    </div>
                    <div>
                        <h1>00</h1>
                        <h5>DAYS</h5>
                    </div>
                    <div>
                        <h1>00</h1>
                        <h5>HOURS</h5>
                    </div>
                    <div>
                        <h1>00</h1>
                        <h5>MINUTES</h5>
                    </div>  
                    <div>
                        <h1>00</h1>
                        <h5>SECONDS</h5>
                    </div>  
                </div>
        
            </div>
        </div>
    </galleryContainer>
    </>)
}