import "./App.css";
import { Component } from "react";
import { CardList } from "./compenents/card-list/card-list.compenent";
import { SearchBox } from "./compenents/search-box/search-box.compenent.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ monsters: users });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <header className="App-header">
          <SearchBox
            placeholder="search monster"
            handleChange={(e) => this.setState({ searchField: e.target.value })}
          />
          <CardList monsters={filteredMonster} />
        </header>
      </div>
    );
  }
}

export default App;
