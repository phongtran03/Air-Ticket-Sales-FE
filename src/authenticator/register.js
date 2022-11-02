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
        <header>HIII</header>
    <form id="form">
            <h3>REGISTER</h3>
            <div class = "form-input">
            <input type="text" name="username" onChange={onChangeUsername} placeholder="username"></input>

            <input type="password" name="password" onChange={onChangePassword} placeholder="password"></input>
     
            <input type="text" name="email" onChange={onChangeEmail} placeholder="email"></input>
     
            <input type="text" name="phone" onChange={onChangePhone} placeholder="phone"></input>

            <button type="button" onClick={onRegister}>Register</button>

            <div>{value}</div>
            </div>
    </form>
    </body>
)
}
export default Register