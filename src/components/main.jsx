import {useState} from "react"
import { useEffect } from "react"
import { useRef } from "react"
import ChefClaudeRecommendation from "./recipe"
import IngredientsList from "./ingredientsList"
import { getRecipeFromHF } from "../../ai"

export default function Main() {
    
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    function addIngredient(formData) {
        const ingredient = formData.get("ingredient")
        if (ingredient.length >= 3 && ingredient.length < 15) {   
            setIngredients(prevIngredients => [...prevIngredients, ingredient])         
        }else{
            alert("Enter a valid ingredient")
        }
    }

    useEffect(()=>{
        if (recipe.length !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])


   async function getRecipe() {
        const  recipeMarkdown = await getRecipeFromHF(ingredients)        
        // setRecipe(recipeMarkdown)
        setRecipe(recipeMarkdown);
    }

    return (

        <main className="main-container">

        <section className="input-section">
            <form action={addIngredient}>
            <input 
            type="text" 
            aria-label="Add Ingredient"
            name="ingredient"
            className="inputElement"
            placeholder="e.g oregano"/>

            <button>Add Ingredient</button>
            </form>
        </section>

       { ingredients.length > 0 && <IngredientsList
            ref={recipeSection}
            ingredients = {ingredients}
            getRecipeFunc = {getRecipe}
            />
        }

        { recipe && <ChefClaudeRecommendation recipe={recipe}/> }

        
        
        </main>
    )


    }
    
