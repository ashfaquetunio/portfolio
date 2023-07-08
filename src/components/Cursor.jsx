import { useRef } from "react";
import { useEffect } from "react";
let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

const Cursor = () => {
  const cursor = useRef();
  const cursorOutline = useRef();

  const CURSOR_SPEED = 0.2; // Adjust this value to control the cursor movement speed

  let mouseX = 0;
  let mouseY = 0;
  let outlineX = 0;
  let outlineY = 0;

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursor.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    cursorOutline.current.style.transform = `translate(${outlineX}px, ${outlineY}px)`;

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    const animateEvent = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  return (
    <>
      <div ref={cursor} className="cursor"></div>
      <div ref={cursorOutline} className="cursor-outline"></div>
    </>
  );
};

export default Cursor;
