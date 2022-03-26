import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <h2 className='title'>Questionnaire</h2>
            
            <div className='par1'>
            <h4>Q1. How does useState Work?</h4>
            <p>The useState hook, like every other React hook, is a specific JavaScript function that must be called as a function.
                    It declares a piece of state that React keeps track of under the hood for subsequent re-renders of the component when called from within a function component.
                    We can generate state variables for our component using the useState hook.
                    State variables are utilized in our component to store dynamic data that changes as the user interacts with it.
                    The contents of a form that the user is filling up is an example of state.
                    The component is constantly changing its state and re-rendering in order to maintain the form data up to date as they interact with the form fields. 
                </p>
            </div>
            <div className='par2'>
            <h4>Q2. Props vs State</h4>
                    <p> 1.Props are read-only & States are asynchronous. <br />
                        2.Props are immutable while States are mutable. <br />
                        3.Props can be passed from parent components & States can be owned by itself. <br />
                        4.Props make components reusable & States can not make such this.
                </p>
            </div>


             
        </div>



        
        
    );
};

export default Question;