import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {value: enteredFirstName, hasError: firstNameInputHasError,valueChangeHandler: firstNameChangeHandler, inputBlurHandler: fistNameBlurHandler, isValid:enteredFirstNameIsValid,reset: resetFirstNameInput} = useInput(value=>value.trim() !== '');
  const {value: enteredLastName, hasError: lastNameInputHasError,valueChangeHandler: lastNameChangeHandler, inputBlurHandler: lastNameBlurHandler, isValid:enteredLastNameIsValid,reset: resetLastNameInput} = useInput(value=>value.trim() !== '');
  const {value: enteredEmail, hasError: emailInputHasError,valueChangeHandler: emailChangedHandler, inputBlurHandler: emailBlurHandler,isValid:enteredEmailIsValid,reset:resetEmailInput} = useInput(value=>value.includes('@'));
  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }


    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };
  const firstNameInputClasses = firstNameInputHasError
  ? 'form-control invalid'
  : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
  ? 'form-control invalid'
  : 'form-control';

const emailInputClasses = emailInputHasError
  ? 'form-control invalid'
  : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={"control-group"} >
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={fistNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        </div>
      </div>
      <div className={emailInputClasses} >
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
