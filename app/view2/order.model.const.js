export const MANAGERS = [
    {
        firstName: 'Alex',
        secondName: 'Ruzhinskiy',
        fullName() {
            return `${this.firstName} ${this.secondName}`
        },
        age: 29
    },
    {
        firstName: 'Vova',
        secondName: 'Melnik',
        fullName() {
            return `${this.firstName} ${this.secondName}`
        },
        age: 26
    }
];


export const ORDER_TYPES ={
    WHOLESALE: 'wholesale',
    RETAIL: 'retail'
};