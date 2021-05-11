import React from "react";
import { Link } from "react-router-dom";
class Login extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:''
        }
    }
    
  render() {
    return (
      <div
        style={{
          display: "inline-block",
          width: "32%",
          marginLeft: "31%",
          marginTop: "5%",
        }}
      >
        <form>
          <div class="form-group" style={{ margin: "2%" }}>
            <label style={{ margin: "2%" }}>Username</label>
            <input
              type="text"
              name="username"
              class="form-control"
              style={{ width: "100%" }}
              placeholder="Enter Username"
              onChange={(e)=>{
                this.setState({name:e.target.value})
              }}
            />
          </div>

          <div class="form-group" style={{ margin: "2%" }}>
            <label style={{ margin: "2%" }}>Password</label>
            <input
              style={{ margin: "2%" }}
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
            />
          </div>


          {/* Passing the name of From Login */}
          <Link to={`/todoApp/${this.state.name}`}>

            <button
              style={{ margin: "2%", marginLeft: "38%" }}
              type="submit"
              class="btn btn-primary"
              
            >
              Submit
            </button>
            
          </Link>
        </form>
      </div>
    );
  }
}


export default Login
