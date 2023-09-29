
import React from "react";

import Navigation from "./component/NavigationBar.js"
import Footer from "./component/Footer.js"
import GalleryWall from "./component/GalleryWall.js";
import Card from "./component/Card.js";
import ScrollContainer from "./container/ScrollContainer.js";
import DraggableSliderWithImages from "./container/Draggable.js";
import "./assets/layout.css"

function App() {
  return (
    <><ScrollContainer/>
      {/*<DraggableSliderWithImages/>
      
       <Navigation/>
      <GalleryWall/>
      
      
      <Card/>
      <Footer/> */}
    </>
  );
}

export default App;
