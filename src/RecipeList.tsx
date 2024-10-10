import React from 'react'
import Recipe from './Recipe';
import { IRecipe } from './IRecipe';

interface IRecipeListProps{
    recipes: IRecipe[];
}

export default function RecipeList({recipes}:IRecipeListProps) {
  return (
    <div>
      {recipes.map((recipe)=>(
        <Recipe key={recipe.id} recipeData={recipe}/>
      ))}
    </div>
  )
}
