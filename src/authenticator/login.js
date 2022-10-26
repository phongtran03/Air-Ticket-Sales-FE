import React, { useState } from 'react'
import axios from 'axios';

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
                    // window.location = 'https://www.youtube.com/'
                    setValue('thanh cong')
                }
            })
            

    }

    return (
        <form>
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={onChangeUsername}></input>
            </div>
            <div>
                <label>password</label>
                <input type="password" name="password" onChange={onChangePassword}></input>
            </div>
            <div>{value}</div>
            <div>
                <button type="button" onClick={onLogin}>Login</button>
            </div>
        </form>
       
    )

}

export default Login