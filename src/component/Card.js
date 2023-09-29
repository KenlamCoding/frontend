import "../assets/object.css"
export default function Card(){
    return(
        <cardContainer>
            <card>
                <div className="cardContainer">
                    <i class="fi fi-rr-credit-card"></i>
                    <h3>Payment method</h3>
                    <div className = "cardContent" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Enim quis nihil sit ab.Voluptatum laboriosam corrupti deserunt!Dolore a fugiat nisi voluptate culpa animi dicta expedita dolor.Quia, voluptatem aliquam.
                    </div>
                    <div className = "cardCredit" >
                        <i class="fi fi-brands-paypal"></i>
                        <i class="fi fi-brands-cc-visa"></i>
                        <i class="fi fi-brands-paypal"></i>
                        <i class="fi fi-brands-cc-visa"></i>
                    </div>
                   
                </div>
                
            </card>
            <card>
                <div className = "cardContainer" >
                    <i class="fi fi-rr-plane-alt"></i>
                    <h3>Payment method</h3>
                    <div className = "cardContent" >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Enim quis nihil sit ab.Voluptatum laboriosam corrupti deserunt!Dolore a fugiat nisi voluptate culpa animi dicta expedita dolor.Quia, voluptatem aliquam.

                    </div>
                    <div className = "list" >
                       <div className = "listItem" >
                            <i class="fi fi-ss-hexagon-check"></i> 
                            <span>Lorem ipsum dolor</span>
                       </div>
                       <div className = "listItem" >
                            <i class="fi fi-ss-hexagon-check"></i> 
                            <span span > Morbi rutrum ex ultricies, mollis magna sed</span>
                       </div>
                    </div>
                </div>
            </card>
        </cardContainer>
    )
}