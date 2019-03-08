import React, {Component} from "react";
import "./style.scss";
import Banner from "../../components/Banner/";
import Header from "../../components/Header/";
import api from "../../services/api";

class Task extends Component{

  constructor(props){
    super(props);

    this.state = {
      task : []
    }
  }

  async componentDidMount(){
    const {id} = this.props.match.params;
    const response = await api.get(`/tasks/${id}`);
    this.setState({task : response.data})
  }

  render(){
    const {task} = this.state;
    return(
      <main>
        <Header></Header>
        <Banner></Banner>
        <div className="container">
          <article className="task" key={task.id}>
            <h2 className="task__title">{task.valor}</h2>
            <p className="task__description">{task.observacao}</p>
          </article>
        </div>
      </main>
    )
  }
}

export default Task;