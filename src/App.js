
import './App.css';
// import RandomeColorGenerator from './component/randome_color_generator';
import StarRating from './component/star-rating';
// import Accordian from './component/accordian';

function App() {
  return (
    <div className="App">
     {/* <Accordian/> */}
     {/* <RandomeColorGenerator/> */}
     <StarRating noOfStar={10}/>
    </div>
  );
}

export default App;
