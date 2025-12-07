import type { HousingRentMortgageState, SelectRentOrMortgage } from "./types";

export const defaultHousingRentMortgageState: HousingRentMortgageState = {
    selectRentOrMortgage: "",
    rent_mortgage_amount: "",
    mortgage_bank_name: "",
    mortgage_bank_name2: "",
};




export const selectRentOrMortgageList: SelectRentOrMortgage[] = [
    {
        id: 1,
        name: "Rent",
    },
    {
        id: 2,
        name: "Mortgage",
    },
];