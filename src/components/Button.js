import React from 'react';

export class Button extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { count: 0, value: "Cliquez !"};
    }

    handleClick = () => {
        this.setState( {count: this.state.count + 1, value: "Clique effectué !"});
        console.log(this.state.count);
      }

    render()
    {
        return (
            // <button onClick={this.handleClick}> {this.props.value} </button>
            <button onClick={this.handleClick}> {this.state.value} </button>

        );
    }
}
