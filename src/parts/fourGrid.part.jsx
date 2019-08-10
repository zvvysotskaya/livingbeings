import React from 'react';
import SMALL_PICTURES from '../data/smallPictures.data';
import Container from '../components/container/container.component';
import './fourGrid.styles.css';

class FourGrids extends React.Component { 
    constructor() {
        super();
        this.state = {
            smallPictures: SMALL_PICTURES
        }
    }
    render() {
        const { smallPictures } = this.state;
        return (
           
            <div className="row">
                {smallPictures.map(small => {
                    return <div className="col-md-3 p-2" key={small.id}>
                        <div className="bg_white p-2">
                            <img src={small.path} className="img-fluid w-100" alt={small.name} />
                        </div>                
                    </div>
                })}                
                </div>
               
        );
    }
}
export default FourGrids; 