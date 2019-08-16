import React from 'react';
import './cardDetailes.styles.css';
import FourGrids from '../parts/fourGrid.part';
import CardLarge from '../components/cardLarge/cardLarge.component';
import LARGE_PICTUER from '../data/largePictures.data';
import Container from '../components/container/container.component';

class CardDetailes extends FourGrids {
    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.state = {
            largePictures: LARGE_PICTUER
        }
    }
    render() {
        const { largePictures } = this.state;        
            return (<Container >                        
                        {
                    largePictures
                        .filter(el=>el.id == this.id)
                        .map(({ id, name, path }) => (<CardLarge key={id} name={name} path = {path}/>))
                        }                
                </Container>);
           
        
    }
}
export default CardDetailes;