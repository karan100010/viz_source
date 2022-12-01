import { RowEntry } from "@google/dscc"

import "./style.css"


export function Hello() {
  return <h1>Hello mr dj</h1>
}
//make a function return h1 with pink color and balck background
export function Num( num) { 
  return <h1 style={{color:"pink",backgroundColor:"black"}}>{num}</h1>
}


// export function Num(num ){
//   return <h1>
//     {num}</h1>
// }