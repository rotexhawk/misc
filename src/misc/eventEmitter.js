class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  on(eventName, cb) {
    const eventCallbacks = this.events.get(eventName) || [];
    eventCallbacks.push(cb);
    this.events.set(eventName, eventCallbacks);
  }
  emit(eventName, cbArg) {
    const eventCallbacks = this.events.get(eventName);
    const filteredCallbacks = [];
    for (const cb of eventCallbacks) {
      cb(cbArg);
      if (cb.type !== "single") {
        filteredCallbacks.push(cb);
      }
      this.events.set(eventName, filteredCallbacks);
    }
  }
  off(eventName, func) {
    let eventCallbacks = this.events.get(eventName) || [];
    eventCallbacks = eventCallbacks.filter(cb => cb !== func);
    this.events.set(eventName, eventCallbacks);
  }
  once(eventName, cb) {
    const cbWithtype = cb;
    cbWithtype.type = "single";
    const eventCallbacks = this.events.get(eventName) || [];
    eventCallbacks.push(cbWithtype);
    this.events.set(eventName, eventCallbacks);
  }
}

const eventEmitter = new EventEmitter();

function responseToEvent(msg) {
  console.log(msg);
}

eventEmitter.on("pramp", responseToEvent);
eventEmitter.once("pramp", function(msg) {
  console.log(msg + " just once!");
});
eventEmitter.emit("pramp", "1st");
eventEmitter.emit("pramp", "2nd");
eventEmitter.off("pramp", responseToEvent);
eventEmitter.emit("pramp", "3rd");
eventEmitter.emit("pramp", "1st");
