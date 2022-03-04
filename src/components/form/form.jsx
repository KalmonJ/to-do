import React, { Component } from "react";
import "./form.css"

export default class Form extends Component {

    constructor(props) {
        super(props);

        this.title = "";
        this.text = "";
    }

    _Title(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _Text(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }

    _CreateCard(event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.CreateNote(this.title, this.text)
    }

    render() {
        return (
            <form className="Form" onSubmit={this._CreateCard.bind(this)}>
                <input type="text" name="" placeholder="Titulo" className="Form__input-titulo" onChange={this._Title.bind(this)} />
                <textarea rows={15} className="Form__text-area" placeholder="Escreva seu texto aqui!" onChange={this._Text.bind(this)} />
                <button type="submit" className="Form__button Form__button-submit">Criar nota</button>
            </form>
        )
    }
}