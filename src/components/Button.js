import React from 'react';

export class Button extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { count: 0, value: "Cliquez !"};
    }

    handleClick = () => {
        const count = this.state.count + 1;
        const value = "Clique effectué ! " + count;
        this.setState( {count, value});
        console.log(this.state.count);
      }

    render()
    {
        return (
            <button onClick={this.handleClick}> {this.state.value} </button>
        );
    }
}
