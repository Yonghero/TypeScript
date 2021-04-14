export class Dictionary<k, v>{
    private keys: k[] = []
    private vals: v[] = []



    get size() {
        return this.keys.length
    }

    set(key: k, val: v) {
        const i = this.keys.indexOf(key)
        if (i < 0) {
            this.keys.push(key)
            this.vals.push(val)
        } else {
            this.vals[i] = val
        }
    }

    has(key: k) {
        return this.keys.includes(key)
    }

    forEach(callback: (key: k, val: v) => void) {
        this.keys.forEach((k, i) => {
            const v = this.vals[i]
            callback(k, v)
        })
    }

    delete(key: k) {
        const i = this.keys.indexOf(key)
        if (i < 0) {
            return
        }
        this.keys.splice(i, 1)
        this.vals.splice(i, i)
    }

}