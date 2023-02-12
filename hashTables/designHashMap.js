class MyHashMap {
    constructor() {
        this.map = new Array(1000001)
    }

    put(key, value) {
        this.map[key] = value
    }

    get(key) {
        let value = this.map[key]
        return value !== undefined ? value : -1
    }

    remove(key) {
        delete this.map[key]
    }
};