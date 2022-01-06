import React from 'react'
function DetailsOfRecipes(props) {
    return (
        <div > 
            {
                props.data.map((value,index)=>{
                   return(<div key={value+index}>
                       <div  className="card">
                                <div  className="card-body" >
                                </div>
                                <img src={value.img} className="card-img-top" alt="img" height={"400px"} width={"300px"}/>
                                      
                            </div><br />
                            <div>
                            <h6  className="card-title">{value.name}</h6>
                            </div>
                            <p className="card-text">{value.recipe}</p>
                   </div>) 
                })
            }

        </div>
    )
}

export default DetailsOfRecipes
