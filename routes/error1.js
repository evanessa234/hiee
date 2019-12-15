class error1 extends Error{
    constructor(message){
        super(message);
        this.name = "NotFound!!!";
    }
}

module.exports = error1;