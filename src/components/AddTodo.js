import React from "react";
import { connect } from "react-redux";
class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Task:''
    };
  }

  handleClick=()=> {
    this.props.addTask(this.state.Task);
    this.setState({Task:''})
  }

  render() {
    return (
      <div style={{alignItems:"center",textAlign:"center",marginTop:"3%"}}>
        <input
        style={{fontStyle: "italic"}}
          type="text"
          placeholder="What needs to be done??"
          value={this.state.Task}
          onChange={(e) => {
            this.setState({ Task: e.target.value });
          }}
        />
        <button
        class="btn btn-outline-primary"
        style={{marginLeft:"1%"}}
          onClick={() => {
            this.handleClick();
          }}
        >
          Add Task
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (val) => dispatch({ type: "ADD_TODO", payload: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
