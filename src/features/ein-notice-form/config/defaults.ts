export const defaultBusinessInfo = {
  profile: "",
  businessName: "",
  businessType: "",
  dateOfIncorporation: "",
  einNumber: "",
  ownerName: "",
};

export const defaultBusinessAddress = { state: "", city: "", address: "", zip: "" };

export const businessTypeList = ["Sole proprietorship", "Partnership", "LLC", "C-Corporation", "S-Corporation", "Non-profit"].map(
  (label, i) => ({ id: i + 1, label }),
);
