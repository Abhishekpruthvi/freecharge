import React, { useEffect } from 'react';
import { Service } from './Service';
import DisplayCard from './DisplayCard';

export default function Shop() {
    const [recipes, setRecipes] = React.useState([]);
  useEffect(() => {
    Service.getRecipes().then(data=>{
      setRecipes(data);
    })
  },[]) 
  return (
    
      <div className="App">
      <h1> Welcome to the Shop</h1>
      {recipes.map(recipe => (
        <DisplayCard 
        url = {recipe.image}
        name = {recipe.name}
        price = {recipe.price}
        />
      ))}
    </div>
    
    
  );
}