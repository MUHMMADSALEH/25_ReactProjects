import "./App.css";
import TreeView from "./component/Tree-view";
import menus from "./component/Tree-view/data";
// import ImageSlider from './component/imageSlider';
// import LoadMoreData from './component/load-more-data';
// import RandomeColorGenerator from './component/randome_color_generator';
// import StarRating from './component/star-rating';
// import Accordian from './component/accordian';

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomeColorGenerator/> */}
      {/* <StarRating noOfStar={10}/> */}
      {/* <ImageSlider/> */}
      {/* <LoadMoreData/> */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
