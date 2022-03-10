import React, { Component } from "react";
import "./style.css";
import {ReactComponent as DeleteSVG} from "../Card/img/delete.svg"

export default class Card extends Component {

    DeleteNote() {
        const target = this.props.indice;
        this.props.delete(target);

    }

    

    render() {
        return (
            <section className="Card__Nota">
                <h4>{this.props.category}</h4>
                <header>
                    <h1 className="Card__Titulo">{this.props.title}</h1>
                </header>
                <p className="Card__paragraph">{this.props.text}</p>
                <DeleteSVG onClick = {this.DeleteNote.bind(this)}/>
            </section>
        );
    }
}