import React from "react";
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import Nav1 from './Nav';

class SideBar extends React.Component {
  render() {
    return (
        <div>
            <Nav1/>
      <div id="con" className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">

        </div>
        <Nav class="container">
         <SubMenu
            title="Connections"
          
            items={["New", "Existing", "Permission"]}
          />
          <SubMenu
            title="Data Sources "
          
            items={["New", "Existing", "Permission"]}
          />
           <SubMenu
            title="Data Pipelines"
          
            items={["New", "Existing", "Permission"]}
          />
          <SubMenu
            title="Feature Engineering "
          
            items={["New", "Existing", "Permission"]}
          />
           <SubMenu
            title="Models"
          
            items={["New", "Existing", "Permission"]}
          />
          <SubMenu
            title="API's "
          
            items={["New", "Existing", "Permission"]}
          />
           <SubMenu
            title="Data Dictionary"
          
            items={["New", "Existing", "Permission"]}
          />
          <SubMenu
            title="Visualization"
          
            items={["New", "Existing", "Permission"]}
          />
           <SubMenu
            title="PAI Flow"
          
            items={["New", "Existing", "Permission"]}
          />
          <SubMenu
            title="Deploy "
          
            items={["New", "Existing", "Permission"]}
          />

          
        </Nav>
      </div>
      </div>
    );
  }
}

export default SideBar; 