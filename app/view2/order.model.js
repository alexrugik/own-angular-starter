let id = 1;

export default class {
    constructor() {
        this.__id = id++;
        this.identifier  = '';
        this.dateOfCreation = new Date();
        this.__dateOfExecution = '';
        this.__orderType = '';
        this.__customer = '';
        this.__provider = '';
        this.__manager = '';
    }

    get id() {
        return this.__id;
    }

    get customer() {
        return this.__customer;
    }

    set customer(customer) {
        if (!customer) {
            return;
        }
        this.__customer = customer;
    }

    get provider() {
        return this.__provider;
    }

    set provider(provider) {
        if (!provider) {
            return;
        }
        this.__provider = provider;

    }

    get manager() {
        return this.__manager;
    }

    set manager(manager) {
        if (!manager) {
            return;
        }
        this.__manager = manager;
    }

    get orderType() {
        return this.__orderType;
    }

    set orderType(orderType) {
        if (!orderType) {
            return;
        }
        this.__orderType = orderType;
    }

    get dateOfExecution() {
        return this.__dateOfExecution;
    }

    set dateOfExecution(dateOfExecution) {
        if (!dateOfExecution) {
            return;
        }
        this.__dateOfExecution = dateOfExecution;
    }

    createIdentifier() {

    }
}