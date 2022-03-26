import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div>
            <h2 className='px-3 py-2 bg-dark text-white'>Questions</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How React Work
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            React is a JavaScript library that allows users to create user interfaces. React.js is commonly referred to as the application's view layer. React employs a declarative paradigm that makes it easy to reason about our application while still aiming to be efficient and adaptable. React creates views for each state in our project, and when our data changes, React updates and renders the appropriate component quickly. Using the declarative perspective, our code will be more predictable and easier to debug.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Props vs State
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table>
                                <tr>
                                    <th>Serial No</th>
                                    <th>Props</th>
                                    <th>State</th>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>Props are read-only.</td>
                                    <td>State changes can be asynchronous.</td>
                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>Props are immutable.</td>
                                    <td>State is mutable.</td>
                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>The state is the local state of the component which cannot be accessed and modified outside of the component.</td>
                                    <td>Props make components reusable by giving components the ability to receive data from their parent component in the form of props.</td>
                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>Props can be accessed by the child component.</td>
                                    <td>State cannot be accessed by child components.</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How useState Work
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            useState is a Hook that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value and another function to update it.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;