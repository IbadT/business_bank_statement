export interface PersonalDetailsData {
    profile: string;
    fullName: string;
    numberOfChildren: string;
    state: string;
    city: string;
    address: string;
    zipCode: string;
    accountNumber: string;

    hasCar: boolean;
    numberOfCar?: string;

    hasChildren: boolean;
    numberOfChildren2?: string;
}


export interface HasCar {
    id: number;
    text: string;
};


export interface HasChildren {
    id: number;
    text: string;
};