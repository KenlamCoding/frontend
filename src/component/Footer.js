import "../assests/footer.css"
export default function Footer() {
    
    return(
    <footer>
        <div className="footerSection">
            <div className = "footerContent" >
                <h2>TreeToolTrade</h2>
                <div className="footerDescription">
                    Duis semper mauris vitae purus rhoncus suscipit. Nunc dictum dapibus tellus, at viverra risus pharetra id. Nulla facilisi. Ut mollis et augue non gravida.
                </div>
            </div>
            <div className = "footerContent">
                <h3>Products</h3>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assests/img/product.png")}/>
                    <div className = "footerProductDescription" >
                        <h4>Shirt</h4>
                        <div>14 HKD</div>
                    </div>
                </div>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assests/img/product.png")}/>
                    <div className = "footerProductDescription" >
                        <h4>Shirt</h4>
                        <div>14 HKD</div>
                
                    </div>
                </div>
            </div>
            <div className = "footerContent">
                <h3>Top Rated Products</h3>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assests/img/product.png")}/>
                    <div className = "footerProductDescription" >
                        <h4>Shirt</h4>
                        <div>14 HKD</div>
                
                    </div>
                </div>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assests/img/product.png")}/>
                    <div className = "footerProductDescription" >
                        <h4>Shirt</h4>
                        <div>14 HKD</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footerMessage"> Created by <b>Ken</b></div>

    </footer>)
}