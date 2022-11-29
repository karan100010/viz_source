import { ObjectFormat, objectTransform, subscribeToData } from '@google/dscc'
import ReactDOM from 'react-dom'
import React from 'react'
import CountUp from 'react-countup';
import { useSpring, useSprings, animated } from "react-spring";
//import anime.js


export function drawViz(data) {
  // const [nm, setNum] = React.useState(0);
  // const props = useSpring({ number: nm, from: { number: 0 } })
  
  // Insert or replace the visualization element
  let element = document.getElementById('viz')
  if (element) {
    element.parentNode?.removeChild(element)
  }
  element = document.createElement('div')
  element.setAttribute("id", "viz")
  document.body.appendChild(element)
  //reander the visualization
  // covert data.tables.DEFAULT[0].configId2 to a string and write to a variable
  // use that variable to pass to the Num function
  const numz = data.tables.DEFAULT[0].someDimension.toString()
  const numt = mapHindi(numz)
  // animate numz making it a ticker using react spring
  const name=<h1>५</h1>
  const num=<h1 onClick={()=>{speak(numt+" रुपये")}}><CountUp start={0} end={numz}/> </h1>
  
 //define onMouseOver function


//on hover over the div with id=viz speak the content of the div in h1 tag



  // Actually render our component
  ReactDOM.render(num, element)
  console.log(data.tables.DEFAULT[0].configId1)
  //call the Num fuction with argument number
 // ReactDOM.render(<Num num="hellox" />, element)
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

//convart numbers to words if number in six figures say lakh and if in eight say crore and if number in four say hazar
function covertNumToWords(num) {
  var num = num.split('.')[0];
 
  if (num.length==3){
    return Math.round(num/100)+"sou"}
  else if(num.length== 4){
    return Math.round(num/1000) +" "+ "hazar"}
  else if(num.length== 6){
    return Math.round(num/100000) +" "+ "lakh"}
  else if(num.length== 8){
    return Math.round(num/10000000) +" "+ "crore"}
  else if(num.length== 10){
    return Math.round(num/1000000000) +" "+ "arab"}
  else if(num.length== 12){
    return Math.round(num/100000000000) +" "+ "kharab"}
  else if(num.length== 14){
    return Math.round(num/10000000000000) +" "+ "nil"}
  else if(num.length== 16){
    return Math.round(num/1000000000000000) +" "+ "padma"}
  else if(num.length== 18){
    return Math.round(num/100000000000000000) +" "+ "shankh"}
  else if(num.length== 20){
    return Math.round(num/10000000000000000000) +" "+ "maha shankh"}
  else{return num}}

//convert number to words in hindi
function covHindi(num){
  var num = num.split('.')[0];
  if (num.length==3){
    return Math.round(num/100)+ " "+"सौ"}
  else if(num.length== 4){
    return Math.round(num/1000) +" "+ "हज़ार"}
  else if(num.length== 6){
    return Math.round(num/100000) +" "+ "लाख"}
  else if(num.length== 8){
    return Math.round(num/10000000) +" "+ "करोड़"}
  else if(num.length== 10){
    return Math.round(num/1000000000) +" "+ "अरब"}
  else if(num.length== 12){
    return Math.round(num/100000000000) +" "+ "खरब"}
  else if(num.length== 14){
    return Math.round(num/10000000000000) +" "+ "नील"}
  else if(num.length== 16){
    return Math.round(num/1000000000000000) +" "+ "पद्म"}
  else if(num.length== 18){
    return Math.round(num/100000000000000000) +" "+ "शंख"}
  else if(num.length== 20){
    return Math.round(num/10000000000000000000) +" "+ "महाशंख"}}
  //crate a mapping of english to hindi numbers
  
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
