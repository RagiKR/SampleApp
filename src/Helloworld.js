import React,{Component} from 'react'

class HelloWorld extends Component
{
    render(){
        return(
            <div>Hello {this.probs.name} </div>
        );
    }
}

ReactDom.render(
    <HelloWorld name="Ragi"/>,
    mountNode
);
export default HelloWorld;
