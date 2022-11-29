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
  let svg1 = d3.select(element)
  .append("svg")
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r",radius1)
  .attr("fill", "red")
  .attr("stroke", "black")
  .attr("stroke-width", 2)
  let svg2 = d3.select(element)
  .append("svg")

  .append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", radius2)
  .attr("fill", "blue")
  .attr("stroke", "black")
  .attr("stroke-width", 2)

  //add svg1 to a div
  let div = d3.select(element)
  .append("div")
  .attr("id", "div1")
  .attr("width", 100)
  .attr("height", 100)
  .append({svg1})

  //add svg2 to a div
  let div2 = d3.select(element)
  .append("div")
  .attr("id", "div2")
  .attr("width", 100)
  .attr("height", 100)
  .append({svg2})

  console.log((dataValue1/total)*100)
  //append total value to the div3
  let div3 = d3.select(element)
  .append("div")
  .attr("id", "div3")
  .attr("width", 100)
  .attr("height", 100)
  .append("text")
  .text({total})
  
  
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