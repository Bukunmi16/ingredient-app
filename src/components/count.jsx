export default function Count({number, addFunction, subtractFunction}){
    return(
        <section className="number-section">
        <h3>{number}</h3>
            <div className="btns">
            <button onClick={subtractFunction}>
            -
            </button>
            
            <button onClick={addFunction}>
            +   
            </button>
                
            </div>
        </section>
    )
}