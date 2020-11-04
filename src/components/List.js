import React from 'react';

export class List extends React.Component
{
    render()
    {
        const listRender = this.props.elements.map((element, index) =>  {
            return(
            <li
                key={index}> {element} 
                <button  onClick={(e) => this.props.onClick(element)}>  X  </button>
            </li>)
        });
        return (
            <div className="container">
                <ul>
                   {listRender} 
                </ul>
            </div>
        );
    }
}
