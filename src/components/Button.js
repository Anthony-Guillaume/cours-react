import React from 'react';

export class Button extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    count = 0;

    handleClick = () => {
        this.count++;
        console.log(this.count);
      }
    
    getCount = () => {
        return this.count;
    };

    render()
    {
        return (
            // <button onClick={this.handleClick}> Cliquez ici </button>
            <button type="button">{this.props.value}</button>
        );
    }
}
