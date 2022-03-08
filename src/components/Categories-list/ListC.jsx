import React, { Component } from "react";
import "./style.css"

class ListC extends Component {

    addCategory(e) {
        if (e.key === "Enter") {
            console.log("Adicionar categoria");
        }
    }

    render() {
        return(
            <section className="container__categories">
                <ul className="list__categories">
                    <li className="list__categories--item">Categoria</li>
                    <li className="list__categories--item">Categoria</li>
                    <li className="list__categories--item">Categoria</li>
                    <li className="list__categories--item">Categoria</li>
                </ul>
                <input type="text" name="categoryes" className="Input" placeholder="Adicionar categoria" onKeyDown={this.addCategory.bind(this)} />
            </section>
        )
    }
}

export default ListC