  import { ObjectFormat, objectTransform, subscribeToData,getWidth,getHeight,sendInteraction,InteractionType} from '@google/dscc'
  import ReactDOM from 'react-dom'
  import * as d3 from "d3";
  import React from 'react';
  import  {useCenteredTree} from "./Hello.jsx";
  import Tree from 'react-d3-tree';
  
  import OrgChartTree from './Hello.jsx';
  import './style.css';
  import { useReactMediaRecorder } from "react-media-recorder";
  

  //import anime.js

//write a function to speak the text in hindi when click using speak function
  export function drawViz(data) {
  //create a tree where first noot is the root node and its value is india

    let element = document.getElementById("viz");
    if (element) {
      element.parentNode?.removeChild(element);
    }
    element = document.createElement("div");  
    element.setAttribute("id", "viz");
    document.body.appendChild(element);
    //drow a graph with the data {name:india,children:[{name:state1,children:[{name:district1,children:[{name:city1},{name:city2}]},{name:district2,children:[{name:city3},{name:city4}]}]},{name:state2,children:[{name:district3,children:[{name:city5},{name:city6}]},{name:district4,children:[{name:city7},{name:city8}]}]}]}
    const orgChart = {name:"india"} 
    orgChart.children=[]
  //crate a tree with orgChart
  //add children form the data
//add height and width to viz div
  element.style.height = getHeight();
  element.style.width = getWidth();

 
  for(let i=0;i<data.tables.DEFAULT.length;i++){

   //only append if already not present in orgChart.children
    if(orgChart.children.filter((e)=>{return e.name==data.tables.DEFAULT[i].level1[0]}).length==0){
      orgChart.children.push({name:data.tables.DEFAULT[i].level1[0]})
    }
  }
  console.log(getHeight()) 
let arr=[]

//handle clicks on anywhare in the data viz and clear arr
const handleclick=(data)=>{
  //if data.interaction is false then clear arr
  if(!data.interaction){
    arr=[]



  }
}

document.addEventListener("click",handleclick)
  
  const handleInteraction = (data,nodeData) => {
    //get arryyes of level1,level2,level3
    let level1=data.tables.DEFAULT.map((e)=>{return e.level1[0]})
    let level2=data.tables.DEFAULT.map((e)=>{return e.level2[0]})
    let level3=data.tables.DEFAULT.map((e)=>{return e.level3[0]})
    //if data.name in level1,level2,level3 write variable column = level1,level2,level3
    let column=""
    let concepts=""
//create a array and push the nodeData.data.name in it and see if if it is in the array if yes then push it out of the array


if(arr.includes(nodeData.data.name)){
  arr.pop()
}
else
[arr.push(nodeData.data.name)]

    if(level1.includes(nodeData.data.name)){
      column="level1"
      concepts=data.fields.level1[0].id

    }
    if(level2.includes(nodeData.data.name)){

      column="level2"
      column=data.fields.level2[0].id
    }
    if(level3.includes(nodeData.data.name)){
      column="level3"
      column=data.fields.level3[0].id
    }

   //send filter with column and data.name
    const interactionData = {
      concepts: [column],
      values: [[nodeData.data.name]]
      

  }
  const interactionId = "click";

 

 

  // the interaction type - only FILTER is supported right now
  const FILTER = InteractionType.FILTER;

  // send the interaction to the parent frame
  sendInteraction(interactionId,FILTER, interactionData);
  // 

   //speak(nodeData.data.name)
   console.log(JSON.stringify(interactionData));}


  function App() {
    const [dimensions, translate, containerRef] = useCenteredTree();
    return (
     //speak whatever app content is clicked
     
      <div
      //speak the text of the node when clicked
       
      id="treeWrapper" style={{ width: getWidth(), height: getHeight() }} ref={containerRef}>
          <Tree 
          
          dimensions={dimensions}
          translate={translate} data={orgChart}
          //speak the text of the node when clicked
          onNodeClick={(nodeData, evt) =>{handleInteraction(data,nodeData)}} 
          rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"  
          />
      </div>
    )
  
  }
 

const RecordView = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false, type: "audio/wav" });

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <video src={mediaBlobUrl} controls autoPlay loop />
    </div>
  );
  }
    

 
 //add level 2 to the tree
  for(let i=0;i<data.tables.DEFAULT.length;i++){
    //find the index of the state in orgChart.children
    let index=orgChart.children.findIndex((e)=>{return e.name==data.tables.DEFAULT[i].level1[0]})
    //only append if already not present in orgChart.children[index].children
    if(orgChart.children[index].children==undefined){
      orgChart.children[index].children=[]
    }
    if(orgChart.children[index].children.filter((e)=>{return e.name==data.tables.DEFAULT[i].level2[0]}).length==0){
      orgChart.children[index].children.push({name:data.tables.DEFAULT[i].level2[0]})
    }
  }
  //add level 3 to the tree
  for(let i=0;i<data.tables.DEFAULT.length;i++){
    //find the index of the state in orgChart.children
    let index=orgChart.children.findIndex((e)=>{return e.name==data.tables.DEFAULT[i].level1[0]})
    //find the index of the district in orgChart.children[index].children
    let index2=orgChart.children[index].children.findIndex((e)=>{return e.name==data.tables.DEFAULT[i].level2[0]})
    //only append if already not present in orgChart.children[index].children[index2].children
    if(orgChart.children[index].children[index2].children==undefined){
      orgChart.children[index].children[index2].children=[]
    }
    if(orgChart.children[index].children[index2].children.filter((e)=>{return e.name==data.tables.DEFAULT[i].level3[0]}).length==0){
      orgChart.children[index].children[index2].children.push({name:data.tables.DEFAULT[i].level3[0]})
    }
  }

console.log(JSON.stringify(orgChart))
  //render the tree
  ReactDOM.render([<App/>,RecordView], element);}

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



