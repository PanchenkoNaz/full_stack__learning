import { Component } from "react";
class MyClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Nazar' };
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

export default MyClassComponent;