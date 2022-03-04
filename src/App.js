import React, { Component } from "react";
import Form from "./components/form/form.jsx";
import ListaDeCards from "./components/lista/listaDeCards.jsx";

class App extends Component {

  constructor() {
    super()
    this.state = {
      notes:[]
    }
  }

  CreateNote(title, text) {
    // const infoNotes = {title, text};
    // const newArrayofNotes = [...this.state.notes, infoNotes];
    this.setState({notes:[...this.state.notes, {title, text}]});

  }

  render() {
    return (
      <section className="container">
        <Form CreateNote={this.CreateNote.bind(this)} />
        <ListaDeCards NewNote={this.state.notes} />
      </section >
    )
  }


}

export default App;
