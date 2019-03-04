import React from "react";
import "./style.scss";
import Header from "../../layout/Header/";
import Banner from "../../layout/Banner/";
import FormList from "../../components/FormList/";
import List from "../../components/List/";

const Admin = () => {
  return(
    <main className="admin">
      <Header></Header>
      <Banner></Banner>
      <div className="container">
        <FormList></FormList>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada.</p>
        <List></List>
      </div>
    </main>
  )
}

export default Admin;