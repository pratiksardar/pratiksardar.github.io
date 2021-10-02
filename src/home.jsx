import './App.css';
import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <img src="https://www.animatedimages.org/data/media/1664/animated-work-in-progress-image-0011.gif" className="App-logo" alt="logo" />
                <p><u>
                   Building something here
                </u></p>
{/*                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>*/}
                </header>
            </div>
            
        );
    }

}

export default Home;