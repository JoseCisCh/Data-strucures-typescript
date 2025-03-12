export default class HashTable {
    data: any[][];

    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key: string): number {
        let hash = 0;
        for(let i=0; i<key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key: string, value: number) {
        let hash = this._hash(key);
        if(!this.data[hash]) {
            this.data[hash] = [];
        } 
        this.data[hash].push([key, value]);
        console.log(this.data);
    }

    get(key: string): number | null {

        let hash = this._hash(key);

        if(!this.data[hash]) return null;

        if(this.data[hash].length == 1) {
            return this.data[hash][0];
        }

        for(let i=0; i<this.data[hash].length; i++) {
            if(this.data[hash][i][0] === key) {
                return this.data[hash][i][1];
            }
        }
        return null;
    }

    keys() {
        const keysArray: any[] = [];

        for(let i=0; i< this.data.length; i++) {
            //console.log(this.data[i]);
            if(this.data[i]) {
                for(let j=0; j<this.data[i].length; j++) {
                    //console.log(this.data[i][j][0]);
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }

}
