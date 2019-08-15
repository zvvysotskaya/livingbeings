import React from 'react';
import SMALL_PICTURES from '../data/smallPictures.data';


import Card from '../components/card/card.component';


class FourGrids extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            smallPictures: SMALL_PICTURES
        }
    }
    render() {
        const { smallPictures } = this.state;
        return (
           
            <div className="row">
                {
                    smallPictures.map(({ id, name, path }) => (
                        <Card key={id} name={name} path={path} id={id} /> 
                        
                ))
                }
            </div>
               
        );
    }
}
export default FourGrids; 