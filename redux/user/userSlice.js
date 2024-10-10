import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userType: "",
    startupAccounts: [],
    candidateAccounts: [],
  },
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    startupRegister: (state, action) => {
      state.startupAccounts.push({ ...action.payload, id: uuidv4() });
    },
    candidateRegister: (state, action) => {
      state.candidateAccounts.push({ ...action.payload, id: uuidv4() });
    },
    loadUserFixtures: (state, action) => {
      console.log("Action USER received:", action);
      const { startupAccounts, candidateAccounts } = action.payload;
      state.startupAccounts = startupAccounts;
      state.candidateAccounts = candidateAccounts;
    },
  },
});

export const {
  setUserType,
  startupRegister,
  candidateRegister,
  loadUserFixtures,
} = userSlice.actions;
export default userSlice.reducer;
