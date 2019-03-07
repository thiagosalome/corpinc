import React, {Component} from "react";
import "./style.scss";
import Banner from "../../layout/Banner/";
import Header from "../../layout/Header/";
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
            <h2 className="task__title">{this.formatToReal(task.valor)}</h2>
            <p className="task__description">{task.observacao}</p>
          </article>
        </div>
      </main>
    )
  }

  formatToReal = value => {
    let newValue = value * 100;
    let v = newValue.toString();
    v = v.replace(/\D/g,'');
    v = (v/100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    return v;
  }
}

export default Task;