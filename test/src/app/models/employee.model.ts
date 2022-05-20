export class Employee {
    id: number;
    name: string;
    gender: string;
    email?: string; /*? tähendab valikuline/optional*/
    phoneNumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    department: string;
    isActive: boolean;
    photoPath?: string;
}