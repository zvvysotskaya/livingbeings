import React from 'react';
import Container from '../components/container/container.component';
import './home.styles.css';
import FourGrids from '../parts/fourGrid.part';


const Home = () => {    
        return (
            <Container>
                <h1 className="text-center my-4">Living Beings</h1>
                <FourGrids/>
            </Container> 
            );    
}
export default Home;