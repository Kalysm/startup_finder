import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const userFixtures = {
  startupAccounts: [
    {
      id: uuidv4(),
      name: "My Startup",
      tel: "123456789",
      area: "Technology",
      birthday: "2000-01-01",
      employees: "10-50",
      siret: "12345678901234",
      logoStartUp:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fstartup_finder-cafbd3f0-196a-44ff-8ca6-6f6198fe0453/ImagePicker/ff0f169d-7b5c-4579-8985-4cfb19585bee.png",
    },
  ],
  candidateAccounts: [
    {
      id: uuidv4(),
      name: "John Doe",
      birthday: "1990-01-01",
      tel: "987654321",
      job: "Developer",
      stack: "React, Node.js",
      experience: "3 years",
      salary: "40000",
      language: "English",
      education: "Master's Degree",
      logoCandidate:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fstartup_finder-cafbd3f0-196a-44ff-8ca6-6f6198fe0453/ImagePicker/1626feb8-be71-464c-8fe3-3dd3d569ef7c.jpeg",
    },
  ],
};

export const jobOfferFixtures = {
  jobOffers: [
    {
      id: uuidv4(),
      title: "Développeur React Native",
      contract: "CDI",
      experience: "2-3 ans",
      salary: "35,000 - 45,000 EUR",
      languages: "Français, Anglais",
      education: "Bac +2",
      description: "Développer des applications mobiles innovantes.",
      stack: "React Native, Node.js",
      permis: "Non requis",
      localisation: "Paris",
      remote: "Hybride",
      benefits: "Mutuelle, Tickets restaurant",
      primes: "Prime de performance",
      textNbrEmployees: "40",
      logoStartUp:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fstartup_finder-cafbd3f0-196a-44ff-8ca6-6f6198fe0453/ImagePicker/ff0f169d-7b5c-4579-8985-4cfb19585bee.png",
    },
    {
      id: uuidv4(),
      title: "Développeur PHP",
      contract: "Freelance",
      experience: "5 ans",
      salary: "45,000 - 55,000 EUR",
      languages: "Français, Anglais",
      education: "Bac +5",
      description: "Développer des applications dynamiques.",
      stack: "PHP, Symfony",
      permis: "Non requis",
      localisation: "Marseille",
      remote: "100% remote",
      benefits: "Mutuelle, Tickets restaurant",
      primes: "Prime de performance",
      textNbrEmployees: "40",
      logoStartUp:
        "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fstartup_finder-cafbd3f0-196a-44ff-8ca6-6f6198fe0453/ImagePicker/ff0f169d-7b5c-4579-8985-4cfb19585bee.png",
    },
  ],
};
