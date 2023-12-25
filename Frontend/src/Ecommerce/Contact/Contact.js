
import { useState } from 'react'
// import './contact.css'
export default function Contact() {

  return (
 <div>
  <header>
    <div className="content">
      <div className="heading">CONTACT US</div>
      <h1>Do you have any questions?</h1>
      <p>Real innovations and a positive customer experience are the heart of successful<br /> communication. No fake
        products and services.</p>
    </div>
    <div className="main">
      <div className="container">
        <div className="img-box">
          <img src="https://img.freepik.com/free-vector/my-answer-concept-illustration_114360-4444.jpg?w=740&t=st=1700379838~exp=1700380438~hmac=ab160862198fe957a6395bc79858cfc99654dd3788a069a399e0f1640e1aab8f" alt />
        </div>
        <form onsubmit="">
          <div className="row">
            <div className="name">
              <label htmlFor>Name</label><br />
              <div className="icon">
                <input type="text" name="name" id="name" placeholder="Enter your Name" required />
                <i className="fa-solid fa-user" id="icon" />
              </div>
            </div>
            <div className="email">
              <label htmlFor>Email</label><br />
              <div className="icon">
                <input type="email" name="email" id="email" placeholder="Enter your Email Id" required />
                <i className="fa-solid fa-envelope" id="icon" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="phone">
              <label htmlFor>Phone</label><br />
              <div className="icon">
                <input type="text" name="phone" id="phone" placeholder="Enter your Phone no." required />
                <i className="fa-solid fa-mobile-screen" id="icon" />
              </div>
            </div>
            <div className="subject">
              <label htmlFor>Subject</label><br />
              <div className="icon">
                <input type="text" name="text" id="subject" placeholder="Enter your Subject" required />
                <i className="fa-solid fa-book" id="icon" />
              </div>
            </div>
          </div>
          <div className="msg">
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" placeholder="Enter your Message here..." cols={30} rows={20} required defaultValue={""} />
          </div>
          <button type="submit" id="sendbtn">Send Message</button>
        </form>
        <footer>
        </footer></div></div></header></div>

  )
}
