import React from 'react';
import './item.css';

export default class Item extends React.Component{
    constructor(props){
        super(props);
    }
    removeTodo(id){
        this.props.removeTodo(id);
    }
    render() {
        return(
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e) => this.removeTodo(this.props .id)}>remove</button>
                {"Id: "}{this.props.todo.id}{" Text: "}{this.props.todo.text}
            </div>
        )

    }
}