import React, { useState } from "react";

const EmpContext = React.createContext({
  storeEmpData: (empData) => {},
  removeEmployee: (empId) => {},
  list: [],
});

export const EmpContextProvider = (props) => {
  const [empList, setEmpList] = useState([]);

  const storeEmpDataHandler = (empData) => {
    setEmpList(empData);
  };

  const removeEmployeeHandler = (empId) => {
    const updateEmpList = empList.filter(emp => emp.id !== empId)
    setEmpList(updateEmpList)
  };

  return (
    <EmpContext.Provider
      value={{
        storeEmpData: storeEmpDataHandler,
        removeEmployee: removeEmployeeHandler,
        list: empList,
      }}
    >
      {props.children}
    </EmpContext.Provider>
  );
};

export default EmpContext;
