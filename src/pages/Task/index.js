import React, {Component} from "react";
import "./style.scss";
import Header from "../../layout/Header/";

class Task extends Component{
  render(){
    return(
      <main>
        <Header></Header>
        <div className="container">
          <article className="task">
            <h2 className="task__title">Task</h2>
            <p className="task__description">Description</p>
          </article>
        </div>
      </main>
    )
  }
}

export default Task;