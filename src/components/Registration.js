export default function Registration(){
    return(
        <form>
            <h2>REGISTRATION</h2>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">REGISTER</button>
        </form>
    )
}