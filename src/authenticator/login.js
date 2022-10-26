import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onLogin = async () => {
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //     "username": username,
        //     "password": password
        // });

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // fetch("http://localhost:8080/login", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

        // const user = {
        //     username: username,
        //     password: password
        // };
        // axios.post('http://localhost:8080/login', user)
        //     .then(response => console.log(response));

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
            <div>
                <button type="button" onClick={onLogin}>Login</button>
            </div>
        </form>
    )

}

export default Login