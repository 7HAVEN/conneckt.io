import { useForm } from "react-hook-form";
import "../styles/form.css";

function Form({ msg, OnSend, name }) {
    const messages = msg.map((message) => (
        <div className="TextBox" key={message.id} OnSend={OnSend}>
            {" "}
            {message.Username}
            <div className="chat">{message.text}</div>
        </div>
    ));
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        OnSend(msg.length + Math.floor(Math.random() * 100) + 1, name, data.text);
    };

    return (
        <div className="form">
            <ul>{messages}</ul>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    autoComplete="off"
                    placeholder=""
                    {...register("text")}
                />
                <button value="Submit">send</button>
            </form>
        </div>
    );
}
export default Form;
