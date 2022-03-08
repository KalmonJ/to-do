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
                <header>
                    <h3 className="Card__Titulo">{this.props.title}</h3>
                </header>
                <p className="Card__paragraph">{this.props.text}</p>
                <DeleteSVG onClick = {this.DeleteNote.bind(this)}/>
            </section>
        );
    }
}