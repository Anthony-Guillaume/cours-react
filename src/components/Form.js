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
    const value = e.currentTarget.value;
    this.setState({value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // alert("Formulaire envoyé : " + this.state.value);
        this.props.handleSubmitValue(this.state.value);
        const value = ""
        this.setState({value});
    }

    render() 
    {
        return (
            <form onSubmit={this.handleSubmit}> 
                <label> Nom : </label>
                <input
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} 
                    name={this.props.name} 
                    placeholder={this.props.placeholder} 
                    disabled={this.props.disabled}
                />
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}