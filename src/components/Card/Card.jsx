import React, { Component } from "react";
import "./style.css"

export default class Card extends Component {

    render() {
        return (
            <section className="Card__Nota">
                <header>
                    <h3 className="Card__Titulo">{this.props.title}</h3>
                </header>
                <p className="Card__paragraph">{this.props.text}</p>
            </section>
        );
    }
}