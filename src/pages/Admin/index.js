import React, {Component} from "react";
import "./style.scss";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import FormList from "../../components/FormList";
import List from "../../components/List";
import Footer from "../../components/Footer";
import api from "../../services/api";
import {getId} from "../../services/auth";

class Admin extends Component {

  constructor(props){
    super(props);

    this.state = {
      tasks : []
    }
  }

  componentDidMount(){
    this.loadTasks();
  }

  render(){
    return(
      <main className="admin">
        <Header></Header>
        <Banner></Banner>
        <div className="container">
          <p className="admin__description--mobile">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada.</p>
          <FormList formSubmited={this.formSubmited}></FormList>
          <p className="admin__description--desktop">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada.</p>
          <List tasks={this.state.tasks}></List>
        </div>
        <Footer></Footer>
      </main>
    )
  }

  formSubmited = () => {
    this.loadTasks();
  }

  loadTasks = async () => {
    const response = await api.get(`/tasks?user=${getId()}`);
    this.setState({tasks : response.data})
  }
}

export default Admin;