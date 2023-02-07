
  //crate a circle with the data value using d3
  import { ObjectFormat, objectTransform, subscribeToData } from '@google/dscc'
  import React from 'react';
  import ReactDOM from 'react-dom'
  import { useEffect, useRef } from 'react'
  import { Engine } from 'matter-js'
  import * as d3 from "d3";
  import Comp from './Hello.jsx';
  //import style.css
  import './style.css';
  //import Matter.js library'
  import * as Matter from 'matter-js';
  
  //import anime.js
  
  
  export function drawViz(data) {
    const {Fragment, useEffect, useRef} = React;
    let element = document.getElementById("viz");
    if (element) {
      element.parentNode?.removeChild(element);
    }
    element = document.createElement("div");
    element.setAttribute("id", "viz");
    document.body.appendChild(element);
  
  const Scene = () => {
    const requestRef = useRef();
    const boxRef = useRef();
    const box1Ref = useRef();
    const groundRef = useRef();
    
  let dataValue1 = parseInt(data.tables.DEFAULT[0].DimensionOne)
  let dataValue2 = parseInt(data.tables.DEFAULT[0].DimensionTwo)
  let total= dataValue1+dataValue2
  let radius1= dataValue1/total*100
  let radius2= dataValue2/total*100
  
    const animate = () => {
      const engine = Matter.Engine.create();
  
      const box = {
        body: Matter.Bodies.circle(150, 0,radius1),
        elem: boxRef1.current,
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - 20}px`;
          this.elem.style.left = `${x - 20}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
      };

      //create a circle with matter.js of radius radius2
      const box2 = {
        body: Matter.Bodies.circle(250, 0,radius2),
        elem: boxRef.current,
        render() {
          const {x, y} = this.body.position;
          this.elem.style.top = `${y - 20}px`;
          this.elem.style.left = `${x - 20}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
      };
      const ground = Matter.Bodies.rectangle(
        200, // x
        200, // y
        400, // w
        120, // h
        {isStatic: true}
      );
      const mouseConstraint = Matter.MouseConstraint.create(
        engine,
        {element: document.body}
      );
      Matter.Composite.add(engine.world, [
        box.body,
        ground,
        mouseConstraint,
      ]);
  
      (function rerender() {
        box.render();
        Matter.Engine.update(engine);
        requestRef.current = requestAnimationFrame(rerender);
      })();
    };
  
    useEffect(() => {
      animate();
      return () => cancelAnimationFrame(requestRef.current);
    }, []);
  
    return (
      <Fragment>
        <div id="box1" ref={boxRef1}></div>
        <div id="box" ref={boxRef}></div>
        <div id="ground" ref={groundRef}></div>
      </Fragment>
    );
  };
  
  ReactDOM.render(
    <Scene />,element
  );
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