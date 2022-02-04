const options = {
    defaultValue: 'localStorage',
    storageTypeSession: 'sessionStorage',
}

class Storage {
    constructor(key, option = options.defaultValue) {
        this.key = key;
        this.option = (option === options.storageTypeSession) ? sessionStorage : localStorage;
    }

    get() {
        return this.option.getItem(this.key)
    }

    set(value) {
        return this.option.setItem(this.key, value)
    }

    clear() {
        return this.option.removeItem(this.key)
    }

    isEmpty() {
        const valueNotExist = this.get() === null || this.get() === undefined;

        if (valueNotExist) {
            return true;
        } 

        return false;
    }
}

