const firstEvent = require('./myEvent')

const firstEventCaller = new firstEvent.myEvent();

firstEventCaller.addListener("addingData", ()=>{
    console.log("this is your notification for adding a data to the database");
})

firstEventCaller.addListener("addingData", ()=>{
    console.log("your friends got the notification");
})

firstEventCaller.addDataToDB();