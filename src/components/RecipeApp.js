import React from 'react'
function RecipeApp(props) {
    let sendItemRecipe = (id1,id2,id3,id4) => {
        var fooditem = [{id:id1, name:id2, recipe:id3, img:id4}];
        props.getData(fooditem)
    }
    return (
        <div >
            {
             props.data.map((value, index) => {
                    return (
                        <div key={value+value.id}  style={{background:"white"}}>
                            <div  className="card" style={{ width: "20rem" }} onClick={()=>{sendItemRecipe(value.id,value.name,value.recipe,value.img)}}>
                                <img src={value.img} alt="" />
                                <div  className="card-body">
                                    <h4>{value.name}</h4> 
                                </div>
                            </div>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RecipeApp
