import React from 'react';

export class List extends React.Component
{
    // constructor(props)
    // {
    //     super(props);
    // }

    render()
    {
        return(
            <div className="container">
                <ul>
                    <li> L1 </li>
                    <li> L2 </li>
                    <li> L3 </li>
                </ul>
            </div>
        );
    }
}