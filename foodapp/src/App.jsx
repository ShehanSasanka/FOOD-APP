import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/Foodlist";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodId, setfoodId] = useState("658615");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setfoodId={setfoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
