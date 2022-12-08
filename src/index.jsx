import { ObjectFormat, objectTransform, subscribeToData } from "@google/dscc";
import ReactDOM from "react-dom";
import React from "react";
import CountUp from "react-countup";
import { useSpring, useSprings, animated } from "react-spring";
//import anime.js
//import css file style.css
import anime from "animejs/lib/anime.es.js";
import bankimg from "./images/bag1.svg";
import rupee from "./images/indian-rupee-coin-color-icon.svg";

import "./style.css";
import { timeline } from "animejs";
import woman from "./images/woman.svg"
import womanPink from "./images/womanpink.svg"
import womanOr from "./images/womanor.svg"
import womanRed from "./images/womanred.svg"
import womanGreen from "./images/womangreen.svg"

export function drawViz(data) {
  // const [nm, setNum] = React.useState(0);
  // const props = useSpring({ number: nm, from: { number: 0 } })

  //add a help button to a variable which uses speak function to speak the content of the variable helpText
  const helpText = "इस तस्वीर से पता चलता है कि आपके पास बैंक में कितना पैसा है, अगर आप अपना माउस निचे लिखी संख्या पर लेजा कर बाएं तरफ का बटन दबाएंगे तो वोह आपको कुल संख्या बता देगा";
const help = (
  <button
    className="help"
    onClick={() => {
      speak(helpText);
    }}
  >
    ?
  </button>
);

const helpDiv = <div className="helpdiv">{help}</div>;
//woman svg
const womanimg =<img className="woman" id="woman1" src={woman} height="100" width="100"></img>
const womanPinkimg =<img className="woman" id="woman2" src={womanPink} height="100" width="100"></img>
const womanOrimg= <img className="woman" id="woman3" src={womanOr} height="100" width="100"></img>
const WomanRedimg= <img className="woman" id="woman4" src={womanRed} height="100" width="100"></img>
const womanGreenimg= <img className="woman" id="woman5" src={womanGreen} height="100" width="100"></img>





  //add a help button to a div
  // Insert or replace the visualization element
  //add bank svg to a div
  const coin = (
    <img
      onLoad={() => animateBank()}
      src={rupee}
      alt="coin"
      className="coin"
      width="30"
      height="30"
    ></img>
  );
  const bank = (
    <img src={bankimg} alt="bank" className="bank" height="100" weigth="100" />
  );
  //animate the bank svg on load such that it drops down

  //nest the bank element inside a div
  const bankdiv = <div className="bankdiv">{bank}</div>;

  let element = document.getElementById("viz");
  if (element) {
    element.parentNode?.removeChild(element);
  }
  element = document.createElement("div");
  element.setAttribute("id", "viz");
  document.body.appendChild(element);
  const coindiv = <div className="coindiv">{coin}</div>;

  //reander the visualization
  // covert data.tables.DEFAULT[0].configId2 to a string and write to a variable
  // use that variable to pass to the Num function
  let numz = data.tables.DEFAULT[0].someDimension.toString();
  const numt = mapHindi(numz);

  // animate numz making it a ticker using react spring
  const name = <h1>५</h1>;
  const num = (
    <h1
      onClick={() => {
        speak(numt + " रुपये");
      }}
    >
      <CountUp start={0} end={numz} prefix="₹" separator=","/>{" "}
    </h1>
  );
//mic div
const mic=<button className="mic" onClick={()=>{speechRead()}}>mic</button>
  
  

  //define onMouseOver function

  //on hover over the div with id=viz speak the content of the div in h1 tag

  // Actually render our component
  ReactDOM.render([helpDiv,coindiv, bankdiv, num,womanGreenimg,womanOrimg,womanPinkimg,WomanRedimg], element);

  //call the Num fuction with argument number
  // ReactDOM.render(<Num num="hellox" />, element)
}

// Connect our drawViz function to Data Studio
subscribeToData(drawViz, { transform: objectTransform });



//get speech form browser


//create a svg of a hand opening and closing


function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "hi";
  speechSynthesis.speak(msg);
}

//animate the coin svg on load such that it drops down and rotates 360 degrees and revloves and disappears
function animateBank() {
  //animate the coin svg on load such that it drops down

  anime({
    targets: ".coin",
    translateY: 100,
    duration: 1700,
    rotate: 360,
    opacity: ["100%", "0%"],
    scale: 1.7,
    easing: "easeInOutSine",
    direction: "normal",
    loop: 4,
  }
  );
    //amimate bankimg to breathe slowly 
  anime({
    targets: ".bank",
    scale: 1.1,
    duration: 900,
    easing: "easeInOutSine",
    direction: "alternate",
    loop: 7,
  })
}


// create mapping of english to hindi numbers
function mapHindi(num) {
  let finalnum = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] == "0") {
      finalnum = finalnum + "०";
    } else if (num[i] == "1") {
      finalnum = finalnum + "१";
    } else if (num[i] == "2") {
      finalnum = finalnum + "२";
    } else if (num[i] == "3") {
      finalnum = finalnum + "३";
    } else if (num[i] == "4") {
      finalnum = finalnum + "४";
    } else if (num[i] == "5") {
      finalnum = finalnum + "५";
    } else if (num[i] == "6") {
      finalnum = finalnum + "६";
    } else if (num[i] == "7") {
      finalnum = finalnum + "७";
    } else if (num[i] == "8") {
      finalnum = finalnum + "८";
    } else if (num[i] == "9") {
      finalnum = finalnum + "९";
    } else if (num[i] == "-") {
      finalnum = finalnum + "-";
    } else if (num[i] == ".") {
      finalnum = finalnum + ".";
    } else {
      finalnum = finalnum + num[i];
    }
  }
  return finalnum;
}
//format a number to indian currency format
function formatIndianCurrency(num) {
  let finalnum = "";
  let count = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    if (count == 3) {
      finalnum = "," + finalnum;
      count = 0;
    }
    finalnum = num[i] + finalnum;
    count++;
  }
  return finalnum;
}