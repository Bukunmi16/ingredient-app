export default function IngredientsList({ getRecipeFunc, ingredients, ref }) {
    const ingredientsArray = ingredients.map((ingredient) => {
        return(
            <li key={ingredient}>{ingredient}</li>
        )
     })
 
    return(
        <section className="list-section">
        <h3>Ingredients on hand:</h3>
        <ul className="ingredient-list">
        {ingredientsArray}
        </ul>

        <div className="get-recipe-container">
        { ingredients.length < 4 &&
        <p className="ingredient-instruction">
            "You need at least 4 ingredients if you want a proper recipe for your meal. Add more ingredients to generate a recipe." 
        </p>
            }
    
       {ingredients.length > 3 &&
       <div ref={ref} className="inside-get-recipe-container">

        <div className="about-recipe-container">
        <h5>Ready for a recipe?</h5>
        <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={getRecipeFunc} className="get-recipe-btn">
        Get a Recipe!
        </button>
        </div>
        }

        </div>
        
        </section>
    )
}