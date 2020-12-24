class StringBuilder {
    constructor (value){
        this._value = value;
    }

    get value() {
        return this._value;
    }

    append = function(str) {
       this._value = this.value + str;
    }

    prepend = function(str){
        this._value = str + this.value;
    }

    pad = function(str) {
        this._value = str + this.value + str;
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); 

builder.prepend('^');
console.log(builder.value); 

builder.pad('=');
console.log(builder.value); 