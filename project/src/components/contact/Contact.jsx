import * as React from "react";
import Modal from "@mui/material/Modal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./Contact.scss";

export default function Contact(props) {
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    var newInput = input;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted");
  };

  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="Contact">
          <div className="Contact__Close">
            <CloseRoundedIcon onClick={handleClose} />
          </div>
          <div className="Contact__Heading">Contact</div>
          <div className="Contact__Para">
            Lorem Ipsum is simply dummy text of the printing
          </div>
          <div className="Contact__InputDiv">
            <div className="Contact__InputDiv__Input">
              <div className="Contact__InputDiv__Input__Label">Name</div>
              <input
                type="text"
                name="name"
                className="Contact__InputDiv__Input__Field"
                placeholder="Enter your name here"
                value={input.name}
                onChange={handleInput}
              />
            </div>
            <div className="Contact__InputDiv__Input">
              <div className="Contact__InputDiv__Input__Label">E-mail</div>
              <input
                type="text"
                name="email"
                className="Contact__InputDiv__Input__Field"
                placeholder="Enter your e-mail address here"
                value={input.email}
                onChange={handleInput}
              />
            </div>
            <div className="Contact__InputDiv__Input">
              <div className="Contact__InputDiv__Input__Label">Message</div>
              <input
                type="text"
                name="message"
                className="Contact__InputDiv__Input__Field"
                placeholder="Wanna share something with us?"
                value={input.message}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="Contact__Submit" onClick={handleSubmit}>
            Submit
          </div>
          <div className="Contact__Footer">
            <div className="Contact__Footer__Para">
              Need more info? hello@newzera.com
            </div>
            <div className="Contact__Footer__Buttons">
              <div className="Contact__Footer__Buttons__Facebook"></div>
              <div className="Contact__Footer__Buttons__LinkedIn"></div>
              <div className="Contact__Footer__Buttons__Twitter"></div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
