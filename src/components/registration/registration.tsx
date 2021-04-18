import React from 'react';

class Registration extends React.Component {
    
    render() {
        return(
            <div>
                <h2>REGISTRATION</h2>
                <div className="form-group center">
                    <label>Email/UserName</label>
                    <input placeholder="test@test.com" required type="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input required type="password" />
                </div>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" />
                </div>
                <button type="submit" className="btn btn-primary" >Registration</button>
            </div>
        )
    }
}

export default Registration;