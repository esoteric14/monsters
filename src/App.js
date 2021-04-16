import react, { Component} from 'react';
import {CardList} from './componets/card-list/card-list.component';
import {searchBox, SerachBox} from './componets/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters :[],
      searchField:''
    };
  }

componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monsters:users}));
}

render() {
  const {monsters, searchField} = this.state;
  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return(
    <div className="App">
        <h1>Monters</h1>
        <SerachBox 
          type="serach" 
          placeholder ="search Monsters" 
          handleChange ={e =>{this.setState({searchField:e.target.value})}}
        />
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}
export default App;
