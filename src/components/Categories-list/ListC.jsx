import React, { Component } from "react";
import "./style.css"

class ListC extends Component {

    constructor() {
        super()
        this.state = {category:[]}
    }

    componentDidMount() {
        this.props.category.register(this._newCategory.bind(this));
    }

    _newCategory(category) {
        this.setState({...this.state, category})
    }

    addCategory(e) {
        if (e.key === "Enter") {
            this.props.addCategory(e.target.value);
        }
    }

    render() {
        return (
            <section className="container__categories">

                <ul className="list__categories">
                    {this.state.category.map((element, index) => {
                        return (
                            <li key={index} className="list__categories--item">{element}</li>
                        )
                    })}
                    
                </ul>
                <input type="text" name="categoryes" className="Input" placeholder="Adicionar categoria" onKeyDown={this.addCategory.bind(this)} />
            </section>
        )
    }
}

export default ListC