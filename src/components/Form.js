import React, { useState } from "react";


const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
        <div>
            <form className="ui form" onSubmit={handleFormSubmit}>
                <div className="ui grid center aligned">
                    <div className="row">
                        <div className="column five wide">
                            <input
                                value={inputValue}
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Ingresar Tarea a Realizar"
                            />
                        </div>
                        <div className="column four wide">
                            <div className="column one wide">
                                <button type="submit" className="ui circular inverted olive button">
                                    <i className="white plus icon"></i> Add Tacks
                                </button> 
                                
                                <a  href="https://github.com/JDQN?tab=repositories" className="ui circular inverted teal button" target="_blank"> 
                                    <i className="white github icon"></i>Repositorio
                                </a>
                            </div>
                            </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;