export default function Login(){
    return(
        <form>
            <h2>LOGIN</h2>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">LOGIN</button>
        </form>
    )
}