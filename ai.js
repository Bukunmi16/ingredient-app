import { HfInference } from "@huggingface/inference";

const apiKey = import.meta.env.VITE_HF_ACCESS_TOKEN;
// console.log(apiKey);



export async function getRecipeFromHF(ingredientsArr) {
    
    const ingredientsString = ingredientsArr.join(", ")

    const SYSTEM_PROMPT = `
    You are an assistant that receives a list of ingredients that a user
    has and suggests a recipe they could make with some or all of those ingredients.
    You don't need to use every ingredient they mention in your recipe. The recipe can include additional
    ingredients they didn't mention, but try not to include too many extra ingredients. 
    Format your response in markdown to make it easier to render to a web page
    I have ${ingredientsString}. Please give me a recipe you'd recommend I make! Please, begin every answer with "Based on your ingredients..." 
    and try to tailor your suggestion to Nigerian dishes first. If you can't get a Nigerian recipe with 
    the ingredients listed, then you can tailor it to intercontinental dishes. Only the suggested dish's name should be in a strong element.`

    const client = new HfInference(apiKey);

    const chatCompletion = await client.chatCompletion({
	model: "mistralai/Mistral-7B-Instruct-v0.3",
	messages: [
		{
			role: "user",
			content: SYSTEM_PROMPT
		}
	],
	provider: "hf-inference",
	max_tokens: 500
    });

    return chatCompletion.choices[0].message;
    // 
    
}
    
