import React from "react";
import Header from './../Header/Header'
import './App.css';


class App extends React.Component {
    // lifecycle, states, props, 

    //old method of state 

    // constructor(){
    //     super();

    //     this.state = {
    //         headerText: "Name It!";
    //     }
    // }
    state = {
        headerText: 'Name It!',
    }

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                {/* <h3>{this.state.headerText}</h3>
                <button onClick={
                    () => {
                        this.setState({
                            headerText: "Woaaah, It's Magic!!"
                        })
                    }
                }> Magic Happens Here</button> 
                // State: a piece of data that might change in future
               // prop: a piece of data that transfer from parent to child 
                */}

            </div>

        )
    }
}

// function App() {
//     return <h1>This is my functional Components</h1>
// }

export default App;