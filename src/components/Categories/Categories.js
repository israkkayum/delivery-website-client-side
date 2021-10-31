import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Categorie from '../Categorie/Categorie';
import './Categories.css';

const Categories = () => {
    
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch('https://food-delivery-sabbir.herokuapp.com/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[]);

    return (
          <div>
              <h5 className="small-title" id="categories">TOP FOODS</h5>
              <h1 className="big-title">Our Categories</h1>
              <div className="title-border"></div>
              
               <div className="container pt-5">
                     <Row xs={1} md={4} className="g-4">
                        {
                            categories.map(categorie => <Categorie
                             
                               key={categorie._id}
                               categorie={categorie}

                            ></Categorie>)
                        }
                     </Row>
               </div>

          </div>
    );
};

export default Categories;