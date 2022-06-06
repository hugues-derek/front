import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class NavMenu extends Component {
  state = { activeItem: "home" };

  handleClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing color="teal" stackable size="massive">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleClick}
            as={Link}
            to="/"
          />

          <Menu.Menu position="right">
            <Menu.Item
              name="register"
              active={activeItem === "register"}
              onClick={this.handleClick}
              as={Link}
              to="/register"
            />
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleClick}
              as={Link}
              to="/login"
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
