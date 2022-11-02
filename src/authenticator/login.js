import React, { useState } from 'react'
import axios from 'axios';
import './login.css';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [value,setValue]=useState()
    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onLogin = async () => {
    
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
                "username": username,
                "password": password
            },
            url: 'http://localhost:8080/login',
        }

        axios(options)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if(res.status == 200){
                    setValue('thanh cong')
                }
            }).catch(error => {
                setValue(error.response.data.message);
            })
            
    }

    return (
        <body>
        <form>
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={onChangeUsername} required></input>
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password" onChange={onChangePassword} required></input>
            </div>
            <div>{value}</div>
            <div>
                <button type="button" onClick={onLogin}>Login</button>
            </div>
        </form>
        </body>
    )

}

export default Login