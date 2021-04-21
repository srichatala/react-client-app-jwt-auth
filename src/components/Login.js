import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from '../services/auth.service';

const Login = (props) => {

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
      };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };

    const handleLogin = (e) => {
        e.preventDefault();
    
        setMessage("");
        setLoading(true);
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
          login(username, password).then(
            () => {
              props.history.push("/profile");
              window.location.reload();
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              setLoading(false);
              setMessage(resMessage);
            }
          );
        } else {
          setLoading(false);
        }
      };

    return(
        <Form onSubmit={handleLogin} ref={form}>
            <h2>LOGIN</h2>
            <div className="form-group">
                <label >Email address</label>
                <Input type="email" 
                value={username}
                onChange={onChangeUsername}
                className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password"  value={password}
                onChange={onChangePassword}
                className="form-control"
                placeholder="Password" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                </button>
            </div>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
    )
}

export default Login;