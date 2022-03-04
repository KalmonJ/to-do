import React, { Component } from "react";
import Card from "../Card/Card";
import "./list.css"

export default class ListaDeCards extends Component {

    render() {
        return (
            <ul className="list">
                {this.props.NewNote.map((notes, index) => {
                    return (
                        <li className="list__item" key={index}>
                            <Card title = {notes.title} text= {notes.text} />
                        </li>
                    )
                })}

            </ul>
        );
    }


}