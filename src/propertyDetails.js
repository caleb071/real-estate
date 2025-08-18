// src/PropertyDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCrosshairs, faBed, faBathtub, faTags, faCar } from '@fortawesome/free-solid-svg-icons';
import './propertyDetails.css'; 

// Temporary static list (reuse the same array from the properties page)
import mansion1 from './assets/mansion1.webp';
import mansion2 from './assets/mansion2.jpeg';
import mansion3 from './assets/mansion3.jpeg';
import mansion4 from './assets/mansion4.jpg';
import mansion5 from './assets/mansion5.jpg';
import mansion6 from './assets/mansion6.jpeg';
import mansion7 from './assets/mansion7.png';
import mansion8 from './assets/mansion8.jpeg';

const propertyList = [
  { id: 1, image: mansion1, title: "4BR Mansion on sale for 24M", location: "Kiambu, membly estate", 
    beds: "4br", baths: "5 bathrooms", parking: "2 parking spaces", save: "1.67%" },

  { id: 2, image: mansion2, title: "4BR Mansion on sale for 18.5M", location: "Ruiru, mugutha",
     beds: "4br", baths: "5 bathrooms", parking: "4 parking spaces", save: "1.02%" },



  { id: 3, image: mansion3, title: "4BR Mansion on sale for 45.4M", location: "Runda estate",
     beds: "4br(dsq)", baths: "5 bathrooms", parking: "2 parking spaces", save: "1.67%" },


  { id: 4, image: mansion4, title: "3BR Mansion on sale for 17.9M", location: "Ngong estate",
     beds: "3br", baths: "4 bathrooms", parking: "2 parking spaces", save: "0.3%" },


  { id: 5, image: mansion5, title: "3BR Mansion on sale for 56.9M", location: "Kileleshwa", 
    beds: "5br+dsq", baths: "6 bathrooms", parking: "5 parking spaces", save: "0.11%" },


  { id: 6, image: mansion6, title: "4BR Mansion on sale for 23.2M", location: "Kimbo", beds:
     "4br", baths: "5 bathrooms", parking: "4 parking spaces", save: "0.9%" },

  { id: 7, image: mansion7, title: "6BR Mansion on sale for 105.4M", location: "Karen estate",
     beds: "6br", baths: "7 bathrooms", parking: "6 parking spaces", save: "0.2%" },


  { id: 8, image: mansion8, title: "4BR Mansion on sale for 25.1M", location: "Juja",
     beds: "4br", baths: "5 bathrooms", parking: "3 parking spaces", save: "1.3%" },

];

function PropertyDetails() {
  const { id } = useParams();
  const property = propertyList.find(p => p.id === parseInt(id));

  if (!property) return <p>Property not found</p>;

  return (
    <div className="property-details">
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p><FontAwesomeIcon icon={faCrosshairs} /> {property.location}</p>
      <p><FontAwesomeIcon icon={faBed} /> {property.beds}</p>
      <p><FontAwesomeIcon icon={faBathtub} /> {property.baths}</p>
      <p><FontAwesomeIcon icon={faCar} /> {property.parking}</p>
      <p><FontAwesomeIcon icon={faTags} /> Save: {property.save}</p>
      <p><FontAwesomeIcon icon={faPhone} /> Call: +254 732 005 004</p>
    </div>
  );
}

export default PropertyDetails;
