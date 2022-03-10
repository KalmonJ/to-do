import React, { Component } from "react";
import Form from "./components/form/form.jsx";
import ListaDeCards from "./components/lista/listaDeCards.jsx";
import ListC from "./components/Categories-list/ListC.jsx"
import Category from "./data/category.js";
import ArrayNotes from "./data/notes.js";



class App extends Component {

  constructor() {
    super()
    this.categories = new Category()
    this.notes = new ArrayNotes()
  }
  //   this.state = {
  //     notes:[],
  //     // category:[],
  //   }
  // }

  // CreateNote(title, text, category) {
  //   this.setState({notes:[...this.state.notes, {title, text, category}]});

  // }

  // DeleteNote(index) {
  //   const newArray = this.state.notes;
  //   newArray.splice(index, 1); // deletando array no indice recebido da classe filha
  //   this.setState({notes: newArray});
  // }

  // addCategory(category) {
  //   const newArrayCategory = [...this.state.category, category];
  //   const newState = {...this.state, category:newArrayCategory}; // criando um novo estado com a nova categoria adicionado
  //   this.setState(newState);

  // }

  render() {
    return (
      <section className="container">
        <Form CreateNote={this.notes.addNotes.bind(this.notes)} category = {this.categories} />
        <main className="Principal-content">
          <ListC addCategory = {this.categories.addCategory.bind(this.categories)} category = {this.categories} />
          <ListaDeCards NewNote={this.notes}  DeleteNote = {this.notes.deleteNotes.bind(this.notes)}/>
        </main>
      </section >
    )
  }


}

export default App;
