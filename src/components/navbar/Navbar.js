import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import Bild from "../img/Bild";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      show: true,
      scrollPos: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  handleScroll = () => {
    if (window.pageYOffset > 340) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <Bild />
        {/* beide css classen */}
        <div className={`Nav ${this.state.nav && "Nav__black"}`}>
          <nav className="NavbarItems">
            <h1
              className="navbar-logo"
              onClick={this.props.mainSiteToggleHandler}
            >
              Ivana<i className="fas fa-cut"></i>{" "}
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
