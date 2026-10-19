export const defaultPersonalInfo = {
  profile: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  dateOfBirth: "",
};

export const defaultAddress = { state: "", city: "", address: "", zip: "" };

export const defaultAppointment = {
  appointmentDate: "",
  cause: "",
  excuseFrom: "",
  excuseUntil: "",
  streetAddress: "",
  weight: "",
};

const toOptions = (labels: string[]) => labels.map((label, i) => ({ id: i + 1, label }));

export const causeList = toOptions(["Illness", "Injury", "Surgery", "Medical appointment", "Pregnancy"]);
export const excuseFromList = toOptions(["Work", "School", "University", "Physical activity"]);
