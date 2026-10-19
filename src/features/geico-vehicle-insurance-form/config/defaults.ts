export const defaultGeneral = {
  profile: "",
  name: "",
  surname: "",
  vehicleYear: "",
  vehicleModel: "",
  vin: "",
  effectiveDate: "",
  additionalDriver: "",
};

export const defaultPayment = { salary: "", paidType: "" };

export const defaultOfficer = { name: "", title: "", email: "", phone: "" };

const toOptions = (labels: string[]) => labels.map((label, i) => ({ id: i + 1, label }));

const currentYear = new Date().getFullYear();
export const vehicleYearList = toOptions(Array.from({ length: 30 }, (_, i) => String(currentYear - i)));
export const salaryList = toOptions(["$30,000", "$45,000", "$60,000", "$80,000", "$100,000", "$120,000+"]);
export const paidTypeList = toOptions(["Hourly", "Weekly", "Bi-weekly", "Monthly", "Annually"]);
