import { createSlice } from "@reduxjs/toolkit";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const offerSlice = createSlice({
  name: "offer",
  initialState: {
    jobOffers: [],
    jobOfferLiked: [],
    candidateOfferLiked: [],
  },
  reducers: {
    createJobOffer: (state, action) => {
      const { logoStartUp, textNbrEmployees, ...jobOfferData } = {
        ...action.payload,
        id: uuidv4(),
      };

      // Add the startUpAccount information to the job offer
      const jobOffer = {
        logoStartUp,
        textNbrEmployees,
        ...jobOfferData,
      };

      state.jobOffers.push(jobOffer);
    },
    loadOfferFixtures: (state, action) => {
      console.log("Action received:", action);
      const { jobOffers } = action.payload;
      state.jobOffers = jobOffers;
    },
    likeJobOffer: (state, action) => {
      const likedJobOffer = action.payload;
      state.jobOfferLiked.push(likedJobOffer);
    },
    removeLikedOffer: (state, action) => {
      state.jobOfferLiked = state.jobOfferLiked.filter(
        (offer) => offer.id !== action.payload
      );
    },
    likeCandidateOffer: (state, action) => {
      const likedCandidateOffer = action.payload;
      state.candidateOfferLiked.push(likedCandidateOffer);
    },
    removeLikedCandidateOffer: (state, action) => {
      state.candidateOfferLiked = state.candidateOfferLiked.filter(
        (offer) => offer.id !== action.payload
      );
    },
  },
});

export const {
  createJobOffer,
  likeJobOffer,
  removeLikedOffer,
  likeCandidateOffer,
  removeLikedCandidateOffer,
  loadOfferFixtures,
} = offerSlice.actions;
export default offerSlice.reducer;
