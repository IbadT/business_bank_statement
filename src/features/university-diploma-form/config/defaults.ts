export type SchoolSource = "own" | "list";

export const defaultSchool = {
  profile: "",
  source: "own" as SchoolSource,
  name: "",
  state: "",
  city: "",
  address: "",
  zipCode: "",
  listSchool: "",
};

export const defaultChairpersons = {
  firstName: "",
  firstPosition: "",
  secondName: "",
  secondPosition: "",
};

export const defaultDegree = { degree: "", speciality: "" };

export const defaultStudent = { name: "", dateOfBirth: "", graduationDate: "" };

const toOptions = (labels: string[]) => labels.map((label, i) => ({ id: i + 1, label }));

export const degreeList = toOptions(["Associate", "Bachelor", "Master", "Doctorate"]);
export const specialityList = toOptions([
  "Business Administration",
  "Computer Science",
  "Economics",
  "Law",
  "Medicine",
  "Engineering",
  "Psychology",
]);
export const schoolList = toOptions([
  "State University",
  "City College",
  "Institute of Technology",
  "National University",
]);
