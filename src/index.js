import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './index.css';
import App from './Pages/Home/App';
import AboutUs from './Pages/AboutUs/AboutUs';
import RestApi from './Pages/RestApi/RestApi';
import FormValidation from './Pages/FormValidation/FormValidation';
import MaterialUI_MDB from './Pages/MaterialUI_MDB/MaterialUI_MDB';
import MaterialUI_FV from './Pages/MaterialUI_FV/MaterialUI_FV';
import StyledComponents from './Pages/StyledComponents/StyledComponents';
import Functional_LCH from './Pages/Functional_LCH/Functional_LCH';
import TodoContainer from './Pages/TodoContainer/TodoContainer';

const routing= (
  <Router>
  <div className="container nav">
    <div className="row">
      <div className="col-sm-12">
        <ul className="nav nav-tabs">
          <li className="nav-item active">
            <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/aboutus" className="nav-link">About Us</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/restapi" className="nav-link">RestApi</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/formvalidation" className="nav-link">Form<br/>Validation</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/modal-dialog" className="nav-link">Modal-Dialog</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/modal-form" className="nav-link">Modal-Form</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/styled-components" className="nav-link">StyledComponents</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/functional-lifecyclehooks" className="nav-link">Func.,LCh</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/classbased-lifecyclehooks" className="nav-link">classbased.,LCH</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/aboutus" component={AboutUs}/>
          <Route path="/restapi" component={RestApi}/>
          <Route path="/formvalidation" component={FormValidation}/>
          <Route path="/modal-dialog" component={MaterialUI_MDB}/>
          <Route path="/modal-form" component={MaterialUI_FV}/>
          <Route path="/styled-components" component={StyledComponents}/>
          <Route path="/functional-lifecyclehooks" component={Functional_LCH}/>
          <Route path="/classbased-lifecyclehooks" component={TodoContainer}/>
        </Switch>
      </div>
    </div>
  </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
