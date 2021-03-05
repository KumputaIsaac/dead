import React, { useEffect, useState } from 'react'
import './App.css';
import Input from './component/Input/Input';
import Name from './component/Name';
import Result from './component/Result/Result';

function App() {

  
  

  const [code,setcode] =useState()
  const [number,setnumber]= useState([])
  const [row,setrow]= useState([])


  useEffect(()=>{
    function random4Digit(){
      return shuffle( "0123456789".split('') ).join('').substring(0,4);
    }
    
    function shuffle(o){
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
    
    var myInt = random4Digit()
    let myFunc = num => Number(num);
    var intArr = Array.from(String(myInt), myFunc);

    setcode(intArr)
    console.log(intArr)
    
  },[])

  // console.log(number)
  

  const getnumber=(e)=>{
    setnumber(e.target.value)
  }

  const handlenumberchange=()=>{
    if(number.length===4){
      const digits = number.toString().split('');
      const realDigits = digits.map(Number);
  
      let x=0;
      let y=0;
      let p=0;
  
  
      const a1 = code[0];
      const a2 = code[1];
      const a3 = code[2];
      const a4 = code[3];
      
      const b1 = realDigits[0];
      const b2 = realDigits[1];
      const b3 = realDigits[2];
      const b4 = realDigits[3];

      if(b1===b2||b1===b3||b1===b4){
        return;
      }else if (b2===b3||b2===b4){
        return
      } else if (b3===b4){
        return
      } else{
        (a1===b1)? x+=1: p+=1;
        (a2===b2)? x+=1: p+=1;
        (a3===b3)? x+=1: p+=1;
        (a4===b4)? x+=1: p+=1;
        
        
        (a1===b2||a1===b3||a1===b4)? y+=1: p+=1;
        (a2===b1||a2===b3||a2===b4)? y+=1: p+=1;
        (a3===b1||a3===b2||a3===b4)? y+=1: p+=1;
        (a4===b1||a4===b2||a4===b3)? y+=1: p+=1;
  
  
        setrow([
        ...row,
        {number: parseInt(number),dead: x, injured: y}
        ]);
          if(x===4){
            alert('you don win, weray')
          }
        }
      setnumber([])
      }
      
      

  }


  return (
    <div className="App">
      <Name />
      <Input handlenumberchange={handlenumberchange} getnumber={getnumber} number={number}/>
      <Result row={row}/>
    </div>
  );
}

export default App;
