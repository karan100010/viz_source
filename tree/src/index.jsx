  import { ObjectFormat, objectTransform, subscribeToData,getWidth,getHeight } from '@google/dscc'
  import ReactDOM from 'react-dom'
  import * as d3 from "d3";
  import React from 'react';
  import  {useCenteredTree} from "./Hello.jsx";
  import Tree from 'react-d3-tree';
  
  import OrgChartTree from './Hello.jsx';
  import './style.css';

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


  function App() {
    const [dimensions, translate, containerRef] = useCenteredTree();
    return (
     //speak whatever app content is clicked
     
      <div
      //speak hello world   
        onClick={() =>
          speak("hello")
        }
      id="treeWrapper" style={{ width: getWidth(), height: getHeight() }} ref={containerRef}>
          <Tree 
          
          dimensions={dimensions}
          translate={translate} data={orgChart}
          rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
          />
      </div>
    )
  
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
  ReactDOM.render(<App/>, element);}

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



