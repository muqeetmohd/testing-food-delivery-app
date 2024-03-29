import { useState, useEffect } from "react";
import MealItem from "./MealItem";
export default function Meals() {

const [loadedMeals, setLoadedMeals] = useState([]);
useEffect(() => {
    (async () => { //using an IIFE
        const response = await fetch('http://localhost:2023/meals');
        const meals = await response.json();

        const multipliedMeals = meals.map((meal) => ({
            ...meal,
            price: (parseFloat(meal.price) * 50).toFixed(2)
        })); 
        
        console.log(multipliedMeals);
        setLoadedMeals(multipliedMeals);
    })();
}, []); 




return(
    <ul id = "meals">
        {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}
 </ul>
)

}