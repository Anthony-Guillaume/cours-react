import React from 'react';

export class Form extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value: ""};
    }

    handleChange = (e) => {
    e.preventDefault();
    this.setState({value: e.currentTarget.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulaire envoyé !");
        this.setState({value: ""});
    }

    render() 
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Nom : </label>
                <input type="text" value={this.state.value} onChange={this.handleChange} /> 
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}