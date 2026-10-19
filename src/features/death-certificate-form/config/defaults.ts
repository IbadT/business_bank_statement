export const defaultDecedent = {
  name: "",
  dateOfBirth: "",
  dateOfDeath: "",
  ssn: "",
  sex: "",
  maritalStatus: "",
  race: "",
};

export const defaultResidence = { state: "", city: "", address: "", zipCode: "" };

export const defaultDeath = {
  causeOfDeath: "",
  mannerOfDeath: "",
  placeOfBirth: "",
  state: "",
  county: "",
  city: "",
  address: "",
  zipCode: "",
};

export const defaultInformant = { name: "", relationship: "" };

const toOptions = (labels: string[]) => labels.map((label, i) => ({ id: i + 1, label }));

export const sexList = toOptions(["Male", "Female"]);
export const maritalStatusList = toOptions(["Single", "Married", "Widowed", "Divorced"]);
export const raceList = toOptions([
  "White",
  "Black or African American",
  "Asian",
  "American Indian or Alaska Native",
  "Native Hawaiian or Pacific Islander",
  "Other",
]);
export const causeOfDeathList = toOptions([
  "Heart disease",
  "Cancer",
  "Stroke",
  "Respiratory disease",
  "Accident",
  "Other",
]);
export const mannerOfDeathList = toOptions(["Natural", "Accident", "Suicide", "Homicide", "Pending investigation", "Undetermined"]);
export const informantList = toOptions(["Informant 1", "Informant 2"]);
export const relationshipList = toOptions(["Spouse", "Child", "Parent", "Sibling", "Relative", "Friend", "Other"]);
