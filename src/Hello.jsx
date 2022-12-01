import { RowEntry } from "@google/dscc";
import "./style.css";
export function Hello() {
  return <h1>Hello mr dj</h1>;
}
//make a function return h1 with pink color and balck background
export function Num(num) {
  return (
    <div>
      <h1><img src="./images/bank.gif" alt="bank" width="100" height="100"></img> {num}</h1>
    </div>
  );
}
