import {  useReducer} from "react";
const initialInputState = {
  value: '',
  isTouched: false,
}
const initialStateReducer = (state, action) => {
  if (action.type === 'INPUT'){
    return {
      value: action.value,
      isTouched: state.isTouched

    }
  }
  if (action.type === 'BLUR'){
    return {
      isTouched: true,
      value: state.value
    }
  }
  if (action.type === 'RESET'){
   return {
    value: '',
    isTouched: false
   }
  }
  return state
}
const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(initialStateReducer,initialInputState);
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchInput({type:'INPUT', value: event.target.value});
  };
  const inputBlurHandler = (event) => {
    dispatchInput({type:'BLUR'});
  };
  const reset = ()=>{
   dispatchInput({type:'RESET'})

  }
  return {
    isValid:valueIsValid,
    value: inputState.value,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};
export default useInput;

