import React from 'react';

export class List extends React.Component
{
    render()
    {
        const listRender = this.props.elements.map((element) =>  <li>{element}</li>);
        return (
            <div className="container">
                <ul>
                    {listRender}
                </ul>
            </div>
        );
    }
}