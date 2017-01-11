import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import "./todo1.css";

class Button extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="button">
                {this.props.children}
            </div>
        )
    }
}


render(<Button>CALL</Button>,document.querySelector("#root"));
