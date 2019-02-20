
import socket from "socket.io-client";

class GameSockect {
    static sock = socket.connect("http://localhost:3000");

    static sendMessage(evtName, msg) {
        console.log("EVT: ", evtName, " MSG: ", msg);
        this.sock.emit(evtName, msg);
    }

    static receiveMessage = GameSockect.sock.on;

    constructor(parameters) {
        
    }
}

export default GameSockect;

// const inputBox: HTMLInputElement = document.getElementById("inputBox") as HTMLInputElement; // get the inputbox
// const chatForm: HTMLFormElement = document.getElementById("form") as HTMLFormElement; // get the form
// const messageBox: HTMLDivElement = document.getElementById("messages") as HTMLDivElement; // get the message box

// const formSubmissionHandler = (form, callback) => {
//   if (form.addEventListener) {
//     form.addEventListener(
//       "submit",
//       function(evt) {
//         evt.preventDefault();
//         callback();
//       },
//       true
//     );
//   } else {
//     form.attachEvent("onsubmit", function(evt) {
//       evt.preventDefault();
//       callback();
//     });
//   }
// };

// const sendMessage = () => {
//   console.log('MSG: ', inputBox.value);
//   sock.emit("chat message", inputBox.value); // emit the socket message
// }

// sock.on('chat message', function(msg){
//   let chatMsg = document.createElement('li');
//   chatMsg.innerText = msg;
//   messageBox.append(chatMsg);
// });

// formSubmissionHandler(chatForm, sendMessage);