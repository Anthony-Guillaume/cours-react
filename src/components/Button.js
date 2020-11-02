import React from 'react';

export class Button extends React.Component
{
    handleClick = () => {
        console.log("text");
      }
    
    render() {
        return (
            <button onClick={this.handleClick}>Cliquez ici</button>
        );
    }
}