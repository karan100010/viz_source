
    

  //crate a circle with the data value using d3
  import { ObjectFormat, objectTransform, subscribeToData,getHeight,getWidth } from '@google/dscc'

  import * as Matter from 'matter-js';
  import * as MatterTools from 'matter-tools';
  
  //import anime.js
  
  
  export function drawViz(data) {
    // module aliases


let dataValue1 = parseInt(data.tables.DEFAULT[0].DimensionOne)
let dataValue2 = parseInt(data.tables.DEFAULT[0].DimensionTwo)
let total= dataValue1+dataValue2
let radius1= dataValue1/total*100
let radius2= dataValue2/total*100
var Example = Example || {};

Example.catapult = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            wireframes: false
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add text to stack
    var stack = Bodies.circle(300, 100, radius2 , { density: 0.005 });


    var catapult = Bodies.rectangle(400, 520, 320, 20);

    Matter.Composite.add(world, [
        stack,
        catapult,
        Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
        Bodies.rectangle(250, 555, 20, 50, { isStatic: true }),
        Bodies.circle(560, 100, radius1 , { density: 0.005 }),
        Constraint.create({ bodyA: catapult, pointB: { x: 390, y: 580 } }),
        Constraint.create({ bodyA: catapult, pointB: { x: 410, y: 580 } })
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

   Matter.Composite.add(world, mouseConstraint);
          
    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

   
    (function rerender() {
     
      Matter.Engine.update(engine);
      requestAnimationFrame(rerender);
    })

}(
  
);
//rerender the Example.catapult  such that the stack variable is inside a div with id of "stack"
Example.catapult().render.canvas.id = "stack";
document.getElementById("stack").style.position = "absolute";
document.getElementById("stack").style.left = "0px";
document.getElementById("stack").style.top = "0px";
document.getElementById("stack").style.zIndex = "-1";
document.getElementById("stack").style.width = "100%";
document.getElementById("stack").style.height = "100%";
document.getElementById("stack").style.margin = "0px";
document.getElementById("stack").style.padding = "0px";
document.getElementById("stack").style.border = "0px";
document.getElementById("stack").style.outline = "0px";

}
//create a seesaw with a base of a triangle and a axal of a rectangle

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