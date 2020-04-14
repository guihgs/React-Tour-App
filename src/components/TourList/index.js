import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

class TourliST extends Component {
    state ={
        tours: tourData
    };
    
    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour=> tour.id !==id);
        this.setState({
            tours:sortedTours
        });
    };

    render() {
        const { tours } = this.state;

        //console.log(this.state.tours);

        //map loop in the array after create new array 

        //tour={tour} is props from Tour.js
        return (
            <section className="tourlIst">
               {tours.map(tour => {
                   return (
                       <Tour key={tour.id} tour={tour} removeTours={this.removetour} />
                   )
               })}
            </section>
        );
    }
}

export default TourliST;