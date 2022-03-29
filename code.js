

class tble{
    name;
    #data;
    #colmnsN;
    #rowsN;
    constructor (tableName){
        this.name = tableName
        this.#data = []
    }
    add_data(param,value){
        this.#data[this.#data.length]={
            param : value
        }
    }
}

table = tble('classs');
table.add_data('ehn', 'djikdf');
console.log('dd')
