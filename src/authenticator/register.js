import React, { useState } from 'react'
import axios from 'axios';
import './register.css';
const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [value,setValue]=useState()
    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePhone = (event) => {
        setPhone(event.target.value)
    }

    const onRegister = async () => {
    
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
                "username": username,
                "password": password,
                "email" : email,
                "phone": phone
            },
            url: 'http://localhost:8080/api/v1/user/register',
        }

        axios.post(options.url, options.data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.status == 200){
                    console.log(res);
                    // window.location = Login
                    setValue('thanh cong')
                } 
            }).catch(error=> {
                setValue(error.response.data.message);

            })
    }

return (
    <body>
    <form id="form">

            <label>Username</label>
            <input type="text" name="username" onChange={onChangeUsername}required></input>

  
            <label>Password</label>
            <input type="password" name="password" onChange={onChangePassword}required></input>
     
    
            <label>Email</label>
            <input type="text" name="email" onChange={onChangeEmail}required></input>
     
  
            <label>Phone</label>
            <input type="text" name="phone" onChange={onChangePhone}required></input>

        <div>{value}</div>
            <button type="button" onClick={onRegister}>Register</button>
    </form>
    </body>
)
}
export default Register