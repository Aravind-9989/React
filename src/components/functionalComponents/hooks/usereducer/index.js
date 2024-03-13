import { useReducer } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "Increment_age_by_10":
      return { ...state, age: state.age + 10 };
      case "Decrement_age_by_10":
      return{...state,age:state.age - 10}
      case "Change_the_name":
        return{...state,name:"Kiran"}
        // case "Add_fruit":
        // return{...state,fruits:[...state,fruits,"New_fruit"]}
    default:
      return state;
  }
}

const initialstate = {
  age: 100,
  name: "Raju",
//   fruits:["apple","banana"]
};

const Usereducer = () => {
 
  const [currentState, dispatch] = useReducer(reducer, initialstate);

  const IncrementAge = () => {
    dispatch({
      type: "Increment_age_by_10"
    });
    
  };
  const DecrementAge=()=>{dispatch({type:"Decrement_age_by_10"})}
const Changename=()=>{
    dispatch({
        type:"Change_the_name"
    })
}
  return (
    <>
      <h1>Usereducer</h1>
      <h2>{currentState.age}</h2>
      <h4>
        {currentState.name}
      </h4>
      <button onClick={IncrementAge}>Increment</button>
      <button onClick={DecrementAge}>Decrement</button>
      <button onClick={Changename}>Change the name</button>
    </>
  );
};

export default Usereducer;




// function Setreducer(state, action) {
//   switch (action.type) {
//     case "create_a_element":
//       return {
//         ...state,
//         elements: [...state.elements, action.payload],
//         count: state.count + 1
//       };
//     case "Read_the_elements":
//       return { ...state };
//     case "Update_the_element":
//       // Assuming action.payload contains the updated element
//       return {
//         ...state,
//         elements: state.elements.map((element) =>
//           element.id === action.payload.id ? action.payload : element
//         )
//       };
//     case "delete_the_element":
//       // Assuming action.payload contains the id of the element to delete
//       return {
//         ...state,
//         elements: state.elements.filter((element) => element.id !== action.payload),
//         count: state.count - 1
//       };
//     default:
//       return state;
//   }
// }
