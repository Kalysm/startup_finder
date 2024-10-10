export const getFieldValue = (offer, field) => {
  return offer?.formData ? offer.formData[field] : offer[field];
};
