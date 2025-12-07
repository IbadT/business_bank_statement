import type { PersonalDetailsData } from "./types";

export const defaultPersonalDetailsData: PersonalDetailsData = {
    profile: "",
    fullName: "",
    numberOfChildren: "",
    state: "",
    city: "",
    address: "",
    zipCode: "",
    accountNumber: "",
    hasCar: false,
    numberOfCar: "",
    hasChildren: false,
    numberOfChildren2: "",
}


export const hasChildrenList = [
    {
        id: 1,
        text: "Yes",
    },
    
    {
        id: 2,
        text: "No",
    }
];

export const hasCarList = [
    {
        id: 1,
        text: "Yes",
    },
    
    {
        id: 2,
        text: "No",
    }
];