import React from "react";
import FormStep from "./FormStep";
import {
  firstOfferData,
  fourthOfferData,
  secondOfferData,
  thirdOfferData,
} from "../../data/offerData";
import {
  candidateRegisterFirstData,
  candidateRegisterSecondData,
  startupRegisterFirstData,
  startupRegisterSecondData,
} from "../../data/registerData";

export const FirstRouteOffer = () => <FormStep data={firstOfferData} />;
export const SecondRouteOffer = () => <FormStep data={secondOfferData} />;
export const ThirdRouteOffer = () => <FormStep data={thirdOfferData} />;
export const FourthRouteOffer = () => <FormStep data={fourthOfferData} />;

export const FirstRegisterRoute = () => (
  <FormStep data={candidateRegisterFirstData} />
);
export const SecondRegisterRoute = () => (
  <FormStep data={candidateRegisterSecondData} />
);

export const FirstStartupRegisterRoute = () => (
  <FormStep data={startupRegisterFirstData} />
);
export const SecondStartupegisterRoute = () => (
  <FormStep data={startupRegisterSecondData} />
);
