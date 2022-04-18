

class table {

    #data;
    headerData;
    #tableHtml;
    constructor(){
        this.#data = []
        this.#tableHtml =''
    }
    insert(...theArgs) {
        this.#data.push([]);
        for ( const cell of theArgs){
            this.#data[this.#data.length - 1].push(cell);
        }
    }

    createHtml(){
        this.#tableHtml = "<table>"
        for (const row of this.#data){
            this.#tableHtml+='<tr>'

            for (let step = 0; step < row.length ; step++){
                let cell = row[step];
                this.#tableHtml = this.#tableHtml + "<th>" + cell + "</th>"
            }
            
            this.#tableHtml += "</tr>"
        }

        this.#tableHtml += "</table>"
        return this.#tableHtml
    }
    }