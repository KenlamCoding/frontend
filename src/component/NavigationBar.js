import "../assests/nav.css";
import "../assests/iconEdit.css";
import logo from "../assests/logo/logo.png";
import { useState } from "react";

export default function NavigationBar() {
    const [closeNavPage, setCloseNavPage] =useState(true)
    function buttonClose(){}
    return (
        <nav>
            <navSection>
                <leftNavSection>
                    <item>
                        <img src={logo} className="logo" />
                    </item>
                </leftNavSection>
                <rightNavSection>
                    <linkSection>
                        <item>Home</item>
                        <item>Categories</item>
                        <item>Products</item>
                    </linkSection>
                    <iconSection>
                        <item><i className="fi fi-brands-facebook"></i></item>
                        <item><i className="fi fi-brands-instagram"></i></item>
                        <item><i className="fi fi-brands-whatsapp"></i></item>
                    </iconSection>
                    <buttonMenuSection>
                        <item onClick={()=>{
                            console.log("Open")
                            setCloseNavPage(preClose=>!preClose)
                        }}><i className="fi fi-br-menu-burger"></i></item>
                    </buttonMenuSection>
                </rightNavSection>
            </navSection>
            <pageNav className = {
                closeNavPage?"inactive":""
            } >
                <pageName>
                    <item>Home</item>
                    <item>Categories</item>
                    <item>Products</item>
                    <div className="pageIconList">
                        <item><i className="fi fi-brands-facebook"></i></item>
                        <item><i className="fi fi-brands-instagram"></i></item>
                        <item><i className="fi fi-brands-whatsapp"></i></item>
                    </div>
                    <div className = "closePage " >
                        <div className = "closeIcon" onClick={()=>{
                            console.log("Close")
                            setCloseNavPage(preClose=>!preClose)
                        }}>
                            <i className="fi fi-rr-circle-xmark " ></i>
                        </div>
                        </div>
                </pageName>
                
                        
                
            </pageNav>
        </nav>
    )
}