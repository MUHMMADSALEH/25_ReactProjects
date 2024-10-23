// import { useState } from "react";


// export default function Search() {
//   const list = [
//     { id: 1, name: "test1" },
//     { id: 2, name: "test2" },
//     { id: 3, name: "test3" },
//     { id: 4, name: "test4" },
//   ];
//   const [input, setInput] = useState("");
//   const [filteredValue, setFilteredValue] = useState([]);

//   const handleClick = (name) => {
//     // console.log("name",name)
//     const copyFillteredValue = [...list];
//     // console.log(copyFillteredValue)

//     const serachedValue = copyFillteredValue.filter(
//       (item) => item.name === name
//     );
    
//     setFilteredValue(serachedValue);
//     setInput("")
//   };

// //   console.log("filteredValue",filteredValue)
// //   console.log("input",input)
//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={()=>handleClick(input)}>search</button>
//       <ul className="App">
//         {
//             filteredValue.length===0?list.map((item) => {
//                 return <li key={item.id}>{item.name}</li>;
//               }):filteredValue.map((item)=>{return <li key={item.id}>{item.name}
                
//               </li> })
//         }
//       </ul>
//     </div>
//   );
// }


import { useState } from "react";

export default function Search() {
  const list = [
    { id: 1, name: "test1" },
    { id: 2, name: "test2" },
    { id: 3, name: "test3" },
    { id: 4, name: "test4" },
  ];

  const [input, setInput] = useState("");

  const filteredList = list.filter((item) =>{

      console.log(item.name.toLowerCase().includes(input.toLowerCase()))
      return item.name.toLowerCase().includes(input.toLowerCase())
  }
  );
console.log("filteredList",filteredList)
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
