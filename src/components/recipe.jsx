import Markdown from "react-markdown"

export default function ChefClaudeRecommendation({recipe}){
    return(
    <section className="suggested-recipe-section-container">
    <section className="suggested-recipe-container">
    <h2>Chef Bukunmi Reccomends:</h2>
        <Markdown>{recipe.content}</Markdown>
   </section>
   </section>
    )
}