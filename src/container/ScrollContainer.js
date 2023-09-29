import React,{useRef, useEffect, useState} from "react";
export default function ScrollContainer() {
    const img =
        "https://images.unsplash.com/photo-1678817546438-acc28fac4d3a?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Nzk2NTQzNzY&ixlib=rb-4.0.3&q=85";

    const ourRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        scrollLeft: 0,
    });

    const handleDragStart = (e) => {
        if (!ourRef.current) return
        const slider = ourRef.current.children[0];

        //e.pageX: Get the X of  DIV
        //slider.offsetLeft: X Distance between Slider frame and the window frame  
        const startX = e.pageX - slider.offsetLeft;

        //Get the Left of image in  the slideShow
        const scrollLeft = slider.scrollLeft;
        //Store the data
        mouseCoords.current = {
            startX,
            scrollLeft,
        }
        setIsMouseDown(true)
        document.body.style.cursor = "grabbing"
    }

    const handleDrag = (e) => {
        //When you drag the image, the ourRef.Current will be null
        //When you drag the image, isMouseDown will be true.
        if (!isMouseDown || !ourRef.current) return;
        e.preventDefault();
        const slider = ourRef.current.children[0];
        const x = e.pageX - slider.offsetLeft;
        const walkX = (x - mouseCoords.current.startX) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
    }

    const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!ourRef.current) return
        document.body.style.cursor = "default"
    }
    

    return (<>
    
      <div ref = {ourRef}
       onMouseDown = {handleDragStart}
       onMouseUp = {handleDragEnd}
       onMouseMove = {handleDrag}
      >
        <div className = "rowWrapper" >
              <img src={img} />
              <img src={img} />
              <img src={img} />
              <img src={img} />
              <img src={img} />
              <img src={img} />
              <img src={img} />
        </div>
      </div>
    </>)
}