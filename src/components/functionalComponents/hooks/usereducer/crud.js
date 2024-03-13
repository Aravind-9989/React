import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    // create the Element
    case "CREATE_ELEMENT":
      return {
        ...state,
        elements: [...state.elements, action.payload],
        count: state.count + 1,
      };
    // read the element
    case "READ_ELEMENTS":
      return { ...state };
    //update the element
    case "UPDATE_ELEMENT":
      return { ...state, name: "Aravind" };
    // delete the Element
    case "DELETE_ELEMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
const initialState = {
  role: "FrontEndDeveloper",
  name: "Janu",
  count: 5,
  elements: [],
};
const Usereducers = () => {
    const [currentState, dispatch] = useReducer(reducer, initialState);
 

  

  const AddElement = () => {
    dispatch({
      type: "CREATE_ELEMENT",
      payload: {
        id: currentState.count + 1,
      },
    });
  };

  const ReadElements = () => {
    dispatch({ type: "READ_ELEMENTS" });
  };

  const UpdateElement = () => {
    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        id: 1,
        name: "Aravind",
      },
    });
  };

  const DeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: 1,
    });
  };

  return (
    <>
      <p>Name: {currentState.name}</p>
      <p>Role: {currentState.role}</p>
      <p>Count: {currentState.count}</p>
      <h1>Usereducer</h1>
      <button onClick={AddElement}>Create or add element</button>
      <button onClick={ReadElements}>Read the elements</button>
      <button onClick={UpdateElement}>Update the element</button>
      <button onClick={DeleteElement}>Delete the element</button>
    </>
  );
};

export default Usereducers;
