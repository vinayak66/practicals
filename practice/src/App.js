import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "../src/searchbox/search.componet";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strings: "",
      monsters: [],
      searchfeild: " ",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchfeild } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchfeild.toLowerCase())
    );
    return (
      <div className="App">
        <Search
          placeholder="search monsters"
          handleChange={(e) => this.setState({ searchfeild: e.target.value })}
        ></Search>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
