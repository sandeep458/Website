import React from 'react'
import Hangers from'../../Images/Hangers.jpg';
import Liquid from '../../Images/Liquid.jpg';
import Clock from '../../Images/Clock.jpg';
import Plants from '../../Images/Plants.jpg';
import Nature from '../../Images/Nature.jpg';
import Earphones from '../../Images/Earphones.jpg';
import Bus from '../../Images/Bus.jpg';
import City from '../../Images/City.jpg';
import Drawing from '../../Images/Drawing.jpg';
import PlantRise from '../../Images/PlantRise.jpg';
import Flower from "../../Images/Flower.jpg";
import Flavour from '../../Images/Flavour.jpg';
import Boat from '../../Images/Boat.jpg';
import FlowerLighting from '../../Images/FlowerLighting.jpg';
import Turtle from '../../Images/Turtle.jpg';
import Peace from '../../Images/Peace.jpg';
import './PhotoGallery.css';
function PhotoGallery() {
    return (
        <div>
            <h2 className="new-heading">
                Latest photos
            </h2>
            <div className="new-photo">
                <img src={Hangers}></img>
                <img src={Liquid}></img>
                <img src={Clock}></img>
                <img src ={Plants}></img>
                <img src ={Nature}></img>
                <img src = {Earphones}></img>
                <img src = {Bus}></img>
                <img src={City}></img>
                <img src={Drawing}></img>
                <img src={PlantRise}></img>
                <img src={Flower}></img>
                <img src ={Flavour}></img>
                <img src ={Boat}></img>
                <img src ={FlowerLighting}></img>
                <img src ={Turtle}></img>
                <img src ={Peace}></img>
            </div>
        </div>
    )
}

export default PhotoGallery
