import React, { Component } from "react";
import Card from "../Card/Card";
import "./list.css"

export default class ListaDeCards extends Component {

    constructor() {
        super()
        this.state = {notes:[]}
    }

    componentDidMount() {
        this.props.NewNote.register(this._newNote.bind(this));
    }

    _newNote(notes) {
        this.setState({...this.state, notes})
    }
    
    render() {
        return (
            <ul className="list">
                {this.state.notes.map((notes, index) => {


                    return (
                        <li className="list__item" key={index}>
                            <Card  category = {notes.category} title = {notes.title} text= {notes.text} delete ={this.props.DeleteNote} indice = {index} />
                        </li>
                    )
                })}

            </ul>
        );
    }


}