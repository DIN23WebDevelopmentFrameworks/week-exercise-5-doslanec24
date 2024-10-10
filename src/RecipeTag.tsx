import React from 'react'
import {props} from "./types"

interface IRecipeTagProps{
    tagName: string;
    onSelectTag: (tagName: string)=>void;
}

export default function RecipeTag({tagName,onSelectTag}:IRecipeTagProps) {
  return (
    <div>
      <button onClick={()=>onSelectTag(tagName)}>{tagName}</button>
    </div>
  )
}
