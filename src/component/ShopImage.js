export default function ShopImage () {
    const journalRef = useRef(null);
    const ourRef = useRef(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0
    });
    const [isScrolling, setIsScrolling] = useState(false);


    const handleDragStart = (e) => {
        if (!ourRef.current) return
        const slider = ourRef.current.children[0];
        const startX = e.pageX - slider.offsetLeft;
        const startY = e.pageY - slider.offsetTop;
        const scrollLeft = slider.scrollLeft;
        const scrollTop = slider.scrollTop;
        mouseCoords.current = {
            startX,
            startY,
            scrollLeft,
            scrollTop
        }
        setIsMouseDown(true)
        document.body.style.cursor = "grabbing"
    }
    const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!ourRef.current) return
        document.body.style.cursor = "default"
    }
    const handleDrag = (e) => {
        if (!isMouseDown || !ourRef.current) return;
        e.preventDefault();
        const slider = ourRef.current.children[0];
        const x = e.pageX - slider.offsetLeft;
        const y = e.pageY - slider.offsetTop;
        const walkX = (x - mouseCoords.current.startX) * 1.5;
        const walkY = (y - mouseCoords.current.startY) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
        slider.scrollTop = mouseCoords.current.scrollTop - walkY;
        console.log(walkX, walkY)
    }

    return (<>
    
    <div className="box">
      <div className="flex my-16 overflow-hidden min-w-2xl relative w-full will-change-auto hover:will-change-scroll">
      <div className="flex flex-col w-60">
        <h1 className="title">Title</h1>
        <p>Text</p>
      </div>
       <div ref = {
           ourRef
       }
       onMouseDown = {
           handleDragStart
       }
       onMouseUp = {
           handleDragEnd
       }
       onMouseMove = {
           handleDrag
       }
       className = {
           "flex overflow-x-scroll"
       } >
        <div className="flex flex-row overflow-x-auto w-full" ref={journalRef}>
          <div className=" shrink-0">
            <div className="w-60">
              <img src={img} />
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60">
              <img src={img} />
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60">
              <img src={img} />
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60">
              <img src={img} />
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60">
              <img src={img} />
            </div>
          </div>
          <div className=" shrink-0">
            <div className="w-60">
              <img src={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>)
}