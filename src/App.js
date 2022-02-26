import Form from "./components/Form";
import { useState } from "react";
const io = require("socket.io-client");
const socket = io.connect("http://localhost:8080");
const name = require('project-name-generator');

const UsrName = ` u- ${name().dashed}`
function App() {
    const [msg, setmsg] = useState([
        {
            id: 1,
            Username: "Ankit",
            text: "Welcome",
        },
    ]);
    socket.on("message", (data) => {
        console.log(data);
        setmsg([...msg, data]);
    });
    const sendMsg = (id, Username, text) => {
        const data = {
            id: id,
            Username: Username,
            text: text,
        };
        socket.emit("message", data);
    };
    return (
        <div className="App">
            <div className="navbar">
                <div className="Con">Connekt</div>
                <div className="dp"></div>
            </div>
            <Form msg={msg} OnSend={sendMsg} name={UsrName} />
        </div>
    );
}

export default App;
