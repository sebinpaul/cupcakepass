import "./App.css";
import image1 from "./assets/socials/Image-1.svg";
import image2 from "./assets/socials/Image-2.svg";
import image3 from "./assets/socials/Image.svg";
import image4 from "./assets/socials/Social-Icons.svg";
import image5 from "./assets/socials/Social-Icons-1.svg";
import image6 from "./assets/socials/Social-Icons-2.svg";
import image7 from "./assets/socials/Social-Icons-3.svg";
import image8 from "./assets/socials/Social-Icons-4.svg";
import image9 from "./assets/socials/Social-Icons-5.svg";
import image10 from "./assets/socials/Social-Icons-6.svg";
import image11 from "./assets/socials/Social-Icons-7.svg";
import image12 from "./assets/socials/Social-Icons-8.svg";
import image13 from "./assets/socials/Social-Icons-9.svg";
import image14 from "./assets/socials/Social-Icons-10.svg";
import image15 from "./assets/socials/Social-Icons-11.svg";
import image16 from "./assets/socials/Social-Icons-12.svg";
import image17 from "./assets/socials/Social-Icons-13.svg";
import image18 from "./assets/socials/Social-Icons-14.svg";
import image19 from "./assets/socials/Social-Icons-15.svg";
import image20 from "./assets/socials/Social-Icons-16.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [submit, setSubmit] = useState(false);
  return (
    <div className="App">
      <section className="container">
        <h1 className="title">CupcakePass</h1>
        {!submit && (
          <p className="description">
            CupcakePass is a subscription service that lets you enjoy<br></br>{" "}
            free cupcakes, everyday, at any participating business of<br></br>{" "}
            your choice for one low monthly fee.
          </p>
        )}
        {!submit && (
          <div className="subDescription">
            <p>Be the first to know when we launch!</p>
            <div className="form-container">
              <form
                onSubmit={() => {
                  setSubmit(true);
                }}
                className="form"
              >
                <div className="inputContainer">
                  <span class="input-label">Name</span>
                  <input
                    type="text"
                    placeholder="ex: Michelle"
                    className="input-field"
                  />
                </div>
                <div className="inputContainer">
                  <span class="input-label">Email</span>
                  <input
                    type="email"
                    placeholder="ex: email@gmail.com"
                    className="input-field"
                  />
                </div>
                <div className="inputContainer">
                  <span class="input-label">Location</span>
                  <input
                    type="text"
                    placeholder="ex: Phoenix, Arizona, USA"
                    className="input-field"
                  />
                </div>
                <button type="submit" className="submit">
                  Join the waitlist
                </button>
              </form>
            </div>
          </div>
        )}
        {submit && (
          <p className="successSubmit">
            <span>Welcome to the community!</span>
            <span>Check your email for</span>
            <span>confirmation.</span>
            <span>Don’t forget to follow us on your</span>
            <span>favorite platforms.</span>
          </p>
        )}
      </section>
      <section>
        {!submit && (
          <div className="heroContainer">
            <p className="heroTitle">
              Why should you buy a <br></br>CupcakePass?
            </p>
            <p className="heroDesc">
              <span>
                CupcakePass gives you one free cupcake everyday. You can order
                multiple free cupcakes in a day.
              </span>
              <span>
                CupcakePass offers shared plans. You can add friends and family
                onto your plan. People added to your plan, can enjoy all the
                same benefits as you do.
              </span>
              <span>
                CupcakePass gives you the flexibility to place orders online or
                at the store for pickup or delivery.
              </span>
              <span>
                CupcakePass can be used at almost any business. Just tap to pay
                at checkout and be on your way.
              </span>
              <span>
                CupcakePass does not restrict you to a single country. You can
                order free cupcakes from local shops on your next trip!
              </span>
              <span>
                CupcakePass is the perfect gift for friends and family.
              </span>
            </p>
          </div>
        )}
        <div className="socialContainer">
          <img src={image1} alt="social-icon" />
          <img src={image2} alt="social-icon" />
          <img src={image3} alt="social-icon" />
          <img src={image4} alt="social-icon" />
          <img src={image5} alt="social-icon" />
          <img src={image6} alt="social-icon" />
          <img src={image7} alt="social-icon" />
          <img src={image8} alt="social-icon" />
          <img src={image9} alt="social-icon" />
          <img src={image10} alt="social-icon" />
          <img src={image11} alt="social-icon" />
          <img src={image12} alt="social-icon" />
          <img src={image13} alt="social-icon" />
          <img src={image14} alt="social-icon" />
          <img src={image15} alt="social-icon" />
          <img src={image16} alt="social-icon" />
          <img src={image17} alt="social-icon" />
          <img src={image18} alt="social-icon" />
          <img src={image19} alt="social-icon" />
          <img src={image20} alt="social-icon" />
        </div>
        <div className="companyLink">
          <Link to={"/privacy-policy"} className="link">
            Privacy Policy
          </Link>
          <Link to={"/term-and-condition"} className="link">
            Terms & Conditions
          </Link>
          <span>support@cupcakepass.com</span>
          <span>© 2024 CupcakePass Inc.</span>
        </div>
      </section>
    </div>
  );
}

export default App;
