const events = require('events')

class firstEvent extends events.EventEmitter{
    addDataToDB(){
        console.log("Data is being added to Database");
        this.emit("addingData")
    }
}

module.exports.myEvent = firstEvent;