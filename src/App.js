import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { useState } from 'react';
import DetailsOfRecipes from './components/DetailsOfRecipes';
import RecipeApp from './components/RecipeApp';
import Navbar from './components/Navbar';

function App() {
  const [fooditemrecipes] = useState([
    {
      id: 1,
      name: "Gulab Jamun",
      recipe: "Recipe: Take 1-cup sugar, 3 green cardamom pods, 1½ cups water and 1-2 drops of lemon juice in a deep pot or pan. Lemon juice is added to prevent syrup from solidifying when it cools.Heat it over medium flame and cook until it reaches 1/2 string consistency or turns little sticky while stirring occasionally in between. It will take around 8-10 minutes over medium flame to reach the required consistency. When sugar syrup is ready, turn off the flame.Take 1/4 cup milk powder, 1/4 cup maida and 1/8 teaspoon baking soda in a wide mouthed bowl.Mix it well with a spoon and then add 1-tablespoon ghee.Mix well. Use your hand to mix it so that ghee mixes evenly with milk powder.Sprinkle 2 tablespoons milk evenly over mixture and gently mix it.If required, add few more teaspoons of milk and mix lightly. Mixture should be soft. It may be sticky but do not worry about it. Do not over mix or knead the mixture, just lightly mix it. If you over mix it, gluten forms and jamun will turn dense and will not absorb sugar syrup properly.Grease your palms with oil and divide mixture into marble sized small portions (around 9-10). Take each portion and make a round shaped crack free ball from it. If crack appears, it means mixture is dry. Add a teaspoon of milk (or few drops of milk) to the mixture, mix well and make the ball. Do not make larger balls as its size will increase to almost double after deep frying and soaking in sugar syrup.Heat the ghee or oil for deep frying in a deep kadai or a small pan over medium flame. When oil is medium hot, pinch a small portion of mixture and drop it into hot oil, if it comes upward immediately without changing its color the oil is medium hot and ready for deep frying. (If it comes upward immediately and turns brown then oil is too hot and needs to be cooled a bit, if it doesn’t come upward then oil is not hot enough and needs to be heated little bit more.) Slowly drop 3-4 balls (according to the size of a kadai) from sides of a kadai and reduce the flame to low.Stir gently with a slotted spoon and deep fry over low flame. Within 2-3 minutes their color will start to turn light golden.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg/1024px-Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg"
  },
    {
      id: 2,
      name: "Paneer Tikka",
      recipe: "Recipe:  Cut paneer cubes and vegetables.Prepare masala for paneer.Soak paneer and veggies in masala.Leave the mixture in the fridge for 5 to 6 minutes. Put masala coated paneer and vegetables on skewers.Take out the paneer tikka from the tandoor.Serve and enjoy.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tikka_Paneer.jpg/1024px-Tikka_Paneer.jpg"
  },
  ]);
  const [dataClicked, setdataClicked] = useState([])

  let getData = (userClick)=>{
    setdataClicked(userClick)
  }
console.log(dataClicked)

  return ( 
    <Router>
      <div className="App">
      <Navbar />
        <div className="row border border-dark" style={{backgroundcolor:"black"}}>
        <br/>
        <div className="col-md-3"  >
        <RecipeApp data={fooditemrecipes} getData={getData}/>
        </div><br/>
        <div className="col-md-8">
        <DetailsOfRecipes data={dataClicked}/>
        </div>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
