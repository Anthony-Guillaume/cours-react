import React from 'react';

export class Form extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {value: "", inputDisabled: true};
    }

    handleChange = (e) => {
        e.preventDefault();
        const value = e.currentTarget.value;
        const inputDisabled = (value === "");
        this.setState({value, inputDisabled});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulaire envoyé : " + this.state.value);
        this.props.handleSubmitValue(this.state.value);
        this.resetFormInput()
    }

    resetFormInput = () => {
        const inputDisabled = true;
        const value = ""
        this.setState({value, inputDisabled});
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
                <input type="submit" value="Envoyer" disabled={this.state.inputDisabled}/>
            </form>
        );
    }
}