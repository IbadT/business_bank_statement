export const defaultEmployee = {
  profile: "",
  name: "",
  surname: "",
  jobTitle: "",
  employmentType: "",
  dateOfHire: "",
};

export const defaultPayment = { salary: "", paidType: "" };

export const defaultOfficer = { name: "", title: "", email: "", phone: "" };

const toOptions = (labels: string[]) => labels.map((label, i) => ({ id: i + 1, label }));

export const employmentTypeList = toOptions(["Full-time", "Part-time", "Contract", "Temporary", "Internship"]);
export const salaryList = toOptions(["$30,000", "$45,000", "$60,000", "$80,000", "$100,000", "$120,000+"]);
export const paidTypeList = toOptions(["Hourly", "Weekly", "Bi-weekly", "Monthly", "Annually"]);
