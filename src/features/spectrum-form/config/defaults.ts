export const defaultBilling = {
  profile: "",
  name: "",
  surname: "",
  plan: "",
  accountNumber: "",
  tarifBase: "",
  billingDate: "",
};

export const defaultAddress = { state: "", streetAddress: "", city: "", zipCode: "" };

export const planList = ["Internet 300", "Internet 500", "Internet Gig", "Internet + TV", "Internet + TV + Voice"].map(
  (label, i) => ({ id: i + 1, label }),
);
