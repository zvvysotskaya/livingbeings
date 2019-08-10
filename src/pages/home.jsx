import React from 'react';
import Container from '../components/container/container.component';
import './home.styles.css';

class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Container>
                <h1 className="text-center my-4">Living Beings</h1>
                </Container> 
            );
    }
}
export default Home;