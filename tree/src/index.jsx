import { ObjectFormat, objectTransform, subscribeToData } from '@google/dscc'
import ReactDOM from 'react-dom'
import * as d3 from "d3";
//import anime.js


export function drawViz(data) {
  let element = document.getElementById('viz')
  let dataValue1 = parseInt(data.tables.DEFAULT[0].DimensionOne)
  let dataValue2 = parseInt(data.tables.DEFAULT[0].DimensionTwo)
  let total= dataValue1+dataValue2
  let radius1= dataValue1/total*100
  let radius2= dataValue2/total*100
  //crate a circle with the data value using d3
  if (element) {
    element.parentNode?.removeChild(element)
  }
  element = document.createElement('div')
  element.setAttribute("id", "viz")
  document.body.appendChild(element)

  //crate a tree visualization using d3
 
   let height =  dscc.getHeight()
    let width =  dscc.getWidth()
    let svg = d3.select("#viz")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    let radius = Math.min(width, height) / 2;
    let color = d3.scaleOrdinal()
    .domain(["dataValue1", "dataValue2"])
    .range(["#ff0000", "#0000ff"]);
    let pie = d3.pie()
    .value(function(d) {return d.value; })

  
  
//rander div1 and div2 in react
  ReactDOM.render([div, div2,div3], element)


 
}

// Connect our drawViz function to Data Studio
subscribeToData(drawViz, { transform: objectTransform })
//text to speech function in hindi

function speak(text) {
  var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "hi";
  speechSynthesis.speak(msg);
}


  
  // create mapping of english to hindi numbers
  function mapHindi(num){
    let finalnum=""
    for(let i=0;i<num.length;i++){
      
      if(num[i]=="0"){
        finalnum=finalnum+"०"
      } else if(num[i]=="1"){
        finalnum=finalnum+"१"
      } else if(num[i]=="2"){
        finalnum=finalnum+"२"
      } else if(num[i]=="3"){
        finalnum=finalnum+"३"
      } else if(num[i]=="4"){
        finalnum=finalnum+"४"
      } else if(num[i]=="5"){
        finalnum=finalnum+"५"
      } else if(num[i]=="6"){
        finalnum=finalnum+"६"
      } else if(num[i]=="7"){
        finalnum=finalnum+"७"
      } else if(num[i]=="8"){
        finalnum=finalnum+"८"
      } else if(num[i]=="9"){
        finalnum=finalnum+"९"
      } else if(num[i]=="-"){
        finalnum=finalnum+"-"
      } else if(num[i]=="."){
        finalnum=finalnum+"."
      } else{finalnum=finalnum+num[i]
    }
  }
  return finalnum}
  //create a animation ticker using anime.js
  function ticker(num){
  const animatedValue = anime({
  targets: num,
  innerHTML: [0, num],
  round: 1,
  easing: 'easeInOutExpo',
  })
return animatedValue}