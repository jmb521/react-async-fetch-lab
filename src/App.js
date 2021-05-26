// create your App component here
import React, {Component} from 'react'; 

class App extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(response => {
            this.setState({
                data: response
            })
        })
    }
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default App