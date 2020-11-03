import React from 'react';

export class List extends React.Component
{
    render()
    {
        const listRender = this.props.elements.map((element, index) =>  <li key={index}> {element}</li>);
        return (
            <div className="container">
                <ul>
                   {listRender}
                </ul>
            </div>
        );
    }
}

// export const ListHook = (elements) => {
//     const listElements = elements.map((element) =>  <li> {element}</li>);
//         return (
//             <div className="container">
//                 <ul>
//                     {listElements}
//                 </ul>
//             </div>
//         );
// ;}