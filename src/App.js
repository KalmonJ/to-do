import React, { Component } from "react";
import Form from "./components/form/form.jsx";
import ListaDeCards from "./components/lista/listaDeCards.jsx";
import ListC from "./components/Categories-list/ListC.jsx"


class App extends Component {

  constructor() {
    super()
    this.state = {
      notes:[]
    }
  }

  CreateNote(title, text) {
    this.setState({notes:[...this.state.notes, {title, text}]});

  }

  DeleteNote(index) {
    const newArray = this.state.notes;
    newArray.splice(index, 1); // deletando array no indice recebido da classe filha
    this.setState({notes: newArray});
  }

  render() {
    return (
      <section className="container">
        <Form CreateNote={this.CreateNote.bind(this)} />
        <main className="Principal-content">
          <ListC/>
          <ListaDeCards NewNote={this.state.notes} DeleteNote = {this.DeleteNote.bind(this)}/>
        </main>
      </section >
    )
  }


}

export default App;
