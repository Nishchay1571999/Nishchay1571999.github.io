import React, { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { SiMinutemailer } from "react-icons/si";
import "./Contact.css";
import { db } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";

const Contact = () => {
  const [comment, setComment] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  useEffect(() => {}, []);
  const sendmessage = async (e) => {
    const sendername = username;
    const senderemail = useremail;
    const commenttosend = comment;

    const doc = await addDoc(collection(db, "message"), {
      username: sendername,
      email: senderemail,
      message: commenttosend,
    });
    console.log(doc);
    const size = Object.keys(doc).length
    if (size>0) {
      alert("Your Comment has been reached !");
      setComment(" ")
      setUserEmail(" ")
      setUsername(" ")
    }else{
      alert("Comment could not reach Sorry !")
    }
  };
  return (
    <section id="contact">
      <h5>Get in Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <div className="contact_option_icon">
              <AiOutlineMail />
            </div>
            <div className="contact_option_decription">
              <h4>Email</h4>
              <h6>nishchay.bhatta@gmail.com</h6>
              <a
                href="mailto:nishchay.bhatta@gmail.com"
                className="btn btn-primary"
                target="_blank"
              >
                Mail me
              </a>
            </div>
          </article>
          <article className="contact_option">
            <div className="contact_option_icon">
              <BsMessenger />
            </div>
            <div className="contact_option_decription">
              <h4>Message me</h4>
              <h6>Nishchay Bhatt</h6>
              <a
                href="https://m.me/nishchay.bhatt.988"
                className="btn btn-primary"
                target="_blank"
              >
                Messager
              </a>
            </div>
          </article>
          <article className="contact_option">
            <div className="contact_option_icon">
              <AiOutlineWhatsApp />
            </div>
            <div className="contact_option_decription">
              <h4>Whats app me</h4>
              <h6>Nishchay Bhatt</h6>
              <a
                href="https://api.whatsapp.com/send?phone+91=8073164265"
                className="btn btn-primary"
                target="_blank"
              >
                Whats app
              </a>
            </div>
          </article>
        </div>
        {/* end of options contact */}
        <div>
          <div className="inputarea">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="name"
              placeholder="Enter your full name"
              required
            />
            <input
              type="email"
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              required
            />
            <textarea
              name="message"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Enter your message "
              rows="?"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={sendmessage}
            className="submitbutton btn btn-primary"
          >
            <SiMinutemailer />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
