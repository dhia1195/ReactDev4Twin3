import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from "./vite.svg";
import './App.css';
import ClassComponent from './Composants/ClassComponent';
import FunctionalComponent from './Composants/FunctionalComponent';
import Mouting from './lifeCycle[CC]/Mounting';
import { Update } from './lifeCycle[CC]/Update';
import Unmouting from './lifeCycle[CC]/Unmounting';

function App(){

}
export default App;

// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);
//   const [frameWidth, setFrameWidth] = useState(window.outerWidth);
//   const [frameHeight, setFrameHeight] = useState(window.outerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//       setFrameWidth(window.outerWidth);
//       setFrameHeight(window.outerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return { width, height, frameWidth, frameHeight };
// }

// export default useWindowWidth;
  // const [{ color, background }, setColor] = useState({ color: "red", background: "purple" });
  // const [state, setState] = useState("");

  // useEffect(() => {
  //   console.log("mounting");
  // }, []);

  // useEffect(() => {
  //   console.log("chaque rerender");
  // });

  // useEffect(() => {
  //   console.log("mounting & updating");
  // }, [color]);

  // return (
  //   <>
  //     <input onChange={(e) => setColor((current) => ({ ...current, color: e.target.value }))} />
  //     <p>My favorite color is {color} {background}!</p>
  //   </>
  // );


