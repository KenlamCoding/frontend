import "../assets/footer.css"
export default function Footer() {
    
    return(
    <footer>
        <div className="footerSection">
            <div className = "footerContent" >
                <h2>TreeToolTrade</h2>
                <div className="footerDescription">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.Enim quis nihil sit ab.Voluptatum laboriosam corrupti deserunt!Dolore a fugiat nisi voluptate culpa animi dicta expedita dolor.Quia, voluptatem aliquam.
                </div>
            </div>
            <div className = "footerContent">
                <h3>Products</h3>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assets/img/product.png")}/>
                    <div className = "footerProductDescription" >
                        <h4>Shirt</h4>
                        <div>14 HKD</div>
                    </div>
                </div>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assets/img/product.png")}/>
                    <div className = "footerProductDescription" >
                        <h4>Shirt</h4>
                        <div>14 HKD</div>
                    </div>
                </div>
            </div>
            <div className = "footerContent">
                <h3>Top Rated Products</h3>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assets/img/product.png")}/>
                    <div className = "footerProductDescription" >
                        <h4>Shirt</h4>
                        <div>14 HKD</div>
                    </div>
                </div>
                <div className="footerProduct">
                    <img className="productIcon" src={require("../assets/img/product.png")}/>
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