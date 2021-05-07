import React from "react";
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return (
      <div style={{ display: "block",marginBottom:"2%" }}>
        <input
          style={{ display: "inline-block", marginLeft: "2%" }}
          type="checkbox"
          checked={this.props.propsIsChecked}
          onClick={() => {
            this.props.taskCompleted(this.props.propsInd);
          }}
        />
        {this.props.propsIsChecked ? (
          <strike style={{ display: "inline-block", marginLeft: "3%" , color:"#9ea7aa"}}>
            <h4>{this.props.propsTask}</h4>
          </strike>
        ) : (
          <h4 style={{ display: "inline-block", marginLeft: "3%" }}>
            {this.props.propsTask}
          </h4>
        )}
        <div style={{marginBottom: "2%" ,display:"inline-block",position: "absolute",right: "0%",left: "75%"  }}>
          <button
            class="btn btn-outline-danger"
            onClick={() => {
              this.props.deleteTask(this.props.propsInd);
            }}
          >
            Delete
          </button>
        </div>
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
    taskCompleted: (val) => dispatch({ type: "TASK_COMPLETED", payload: val }),
    deleteTask: (val) => dispatch({ type: "DELETE_TASK", payload: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
