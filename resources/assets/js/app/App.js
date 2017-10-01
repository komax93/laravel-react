import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="application">
                {this.props.children}
            </div>
        )
    }
}

export default App;