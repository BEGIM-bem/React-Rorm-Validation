import './App.css'
import React, { useEffect, useState } from 'react';

function App() {
  const[email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState("Email не может быть пустым")
  const [passwordError, setPasswordError] = useState("Password не может быть пустым")

  const[formValid, setFormValid] = useState(false)


function f(e){
  e.preventDefault();


  if(emailError || passwordError){
    setFormValid(false)
    alert("Заполните поля по всем требованием")
  

  }
  else{
    setFormValid(true)
    alert("Регистрация прошла успешно")
    setEmail('')
    setPassword('')


  }
}


  const emailHandler =(e) =>{

    setEmail(e.target.value)
    const validations =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!validations.test(String(e.target.value).toLowerCase() )) {
      setEmailError("Некорректный емейл")
    }
    else{
      setEmailError('')
    }

  }
  const passwordHandler =(e) =>{
    setPassword(e.target.value)
    if (e.target.value.length < 6 || e.target.value.length > 8 ){
      setPasswordError("Пароль должне быть длинее 6 и меньше 8")
      if(!e.target.value){
        setPasswordError('Password не может быть пустым')
      }
    }else{
      setPasswordError('')
    }

  }


  const blurHandler =(e) =>{
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break;
    case 'password':
      setPasswordDirty(true)
        break;
    }
  }



  return (
    <div className="App">
    
      <form className = 'form' >
        <h1 className = 'title'>Регистрация</h1>
        {(emailDirty && emailError) && <div style={{color:'red' , paddingRight: '200px'}}> {emailError}</div> }
        <input value ={email}  onChange ={e=> emailHandler(e) }  onBlur = {e => blurHandler(e) } type = "text" name ='email' placeholder ='Enter your email...' className ='input' /><br/>
        
        {( passwordDirty && passwordError) && <div style={{color:'red', paddingRight: '100px'}}> {passwordError}</div> }
        <input onChange ={e=>passwordHandler(e)}   value = {password} onBlur = {e => blurHandler(e) } type ='text' name ='password' placeholder ='Enter tour password' className ='input' /><br/>
{/* 
        <input type ="text"  placeholder ='assword confirmation' className ='input' /><br /> */}
        <button type ='submit' onClick ={e=> f(e)}   className = 'sumbit' >Registration</button>
      </form>
  
    
    </div>
  );
}

export default App;
