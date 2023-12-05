 import { useState } from "react";
 import "./Counter.css";


const Counter = () => {
  let [mainCount, setMaincCount]= useState(0);
  let [tc,setTc]=useState(0);
  let [p,setp]= useState("");
  let [nameArray, setNameArray]=useState([]);
  let [uishow,setUishow]=useState(false);

  
  const clickHandaler = ()=>{
    setMaincCount(++mainCount);

    if(mainCount >= 0 && mainCount <= 33){
      setp("Subhanallah");
      setNameArray([p])
      setTc(mainCount);
      mainCount===33?setUishow(true):setUishow(false);
      
    }else if (mainCount >33 && mainCount <= 66){
       setp("Alhudullah");
       
       setTc(mainCount-33)
       mainCount===34?setUishow(false):p;
       mainCount===66?(setUishow(true), setNameArray([...nameArray,p])) :setUishow(false);

    }else if (mainCount >66 && mainCount <=100){
      setp("Allah-huyakbar");
      setTc(mainCount-66)
      mainCount===64?setUishow(false):p;
      mainCount===100?(setUishow(true), setNameArray([...nameArray,p])):setUishow(false);

    }else{
      setMaincCount(0);
      setp("");
      setTc(0)  
    }
  }
  const reset = ()=>{
    if(resetConfirm()){
      setMaincCount(0);
      setTc(0);
      setp("");
      setNameArray([]);
    }
  }
  const resetConfirm =()=>{
   let cnf = confirm(`you sure reset your tosbi`);
    if(cnf){
      return true
    }else{
      return false
    }
  }

  return (
    <div className=" container">
      <div className="tosbiMain">
        <h1> This is Tosbi counter app in web</h1>
        <hr />
        <h3>{uishow?`Your complite tosbi is ${p}`:`${p}  ${tc}`}</h3>
          <h4>{p?`Please raning read ${p}`:p}</h4>
        <div className="button">
          <button onClick={clickHandaler}>Counter</button>
          <button onClick={reset}>Reset </button>
        </div>
          <div className="list">
            <h3>Show your complate tosbi</h3>
            <div>
            {
              nameArray.map((val,i)=>{
                 if(mainCount>=33){
                  return (<h4 key ={i.toString()}> Your complite Tosbi is {val} {val==="Allah-huyakbar"?34:33} Bar </h4>)
                }
              })
              }
            
            </div>
          </div>
          <h5> {mainCount >= 99? `Total count is : ${mainCount}`:false}</h5>
      </div>
    </div>
  );
};

export default Counter;
