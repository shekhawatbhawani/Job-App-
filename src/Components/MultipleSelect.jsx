import React from "react";
import CreatableSelect from "react-select/creatable";

const MultipleSelect = ({Options}) => {
  return (
    <CreatableSelect
      isClearable
      options={Options }
       className='rounded-md w-full focus:outline-none min-w-52'
    />
  );
};

export default MultipleSelect;
