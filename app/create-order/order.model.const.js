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


export const ORDER_TYPES = {
    WHOLESALE: 'wholesale',
    RETAIL: 'retail'
};

export const DATE_PICKER_STATE = {
    dateOfExecution: new Date(),
    format: 'dd-MMMM-yyyy',
    isOpened: false,
    options: {
        minDate: new Date()
    },
    open() {
        this.isOpened = true;
    }
};