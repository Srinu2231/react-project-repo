import { createSlice } from "@reduxjs/toolkit";

const list = [
  {
    id:"1",
    FirstName: "Srinivasulu",
    LastName: "Thangirala",
    MiddleName:"NA",
    ContactNo:9876543210,
    Gender:'Male',
    Email:'srinut2231@gmail.com',
    PAN:"122SSSDF23",
    DOB:'15/06/1995',
    Address:'AP'
  },
  {
    id:"2",
    FirstName: "Ysr",
    LastName: "Y",
    ContactNo:9010429088,
    Gender:'Male',
  },
  {
    id:"3",
    FirstName: "Kasi",
    LastName: "M",
    ContactNo:9876543210,
    Gender:'Male',
  },
];

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    userEmail: "Test",
    list:list,
  },
  reducers: {
    login(state, action) {
      localStorage.setItem("isLoggedIn", 1);
      state.userEmail = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      localStorage.removeItem("isLoggedIn");
      state.userEmail = "";
      state.isLoggedIn = false;
    },
    storeEmployeeData(state, action){
      const empList = action.payload;
      state.list = state.list.concat(empList);
    },
    removeEmployee(state, action){
      const empId = action.payload;
      state.list = state.list.filter(emp => emp.id !== empId);
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
