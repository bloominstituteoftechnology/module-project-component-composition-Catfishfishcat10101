import React from "react";

function DateInput(props) {
  const changeDate = e => {
    e.preventDefault();
    let dateFromInput = e.target[0].value;
    props.changeDate(dateFromInput);
  };

  return (
    <form onSubmit={changeDate}>
      Enter a date (YYYY-MM-DD):
      <input />
      <input type="submit" />
    </form>
  );
}
export default DateInput;
