import React, { Component } from "react";
import "./form.css"

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.text = "";
        this.category = "Sem Categoria";
        this.state = {category:[]}
    }

    componentDidMount() {
        this.props.category.register(this._newCategory.bind(this));
    }

    _newCategory(categories) {
        this.setState({...this.state, categories})
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
        this.props.CreateNote(this.title, this.text, this.category)
    }

    _handleChangeCategory(event) {
        event.stopPropagation();
        this.category = event.target.value;
    }

    render() {
        return (
            <form className="Form" onSubmit={this._CreateCard.bind(this)}>
                <select onChange={this._handleChangeCategory.bind(this)} name="select" className="select-option">
                    <option>Sem Categoria</option>
                    {this.state.category.map((category, index)=> {
                        return(
                            <option key={index}>{category}</option>
                        )
                    })}
                </select>
                <input type="text" name="" placeholder="Titulo" className="Form__input-titulo" onChange={this._Title.bind(this)} />
                <textarea rows={15} className="Form__text-area" placeholder="Escreva seu texto aqui!" onChange={this._Text.bind(this)} />
                <button type="submit" className="Form__button Form__button-submit">Criar nota</button>
            </form>
        )
    }
}