import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/contact"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>
        {/* footer section */}

        <footer>
          <div className="container grid grid-four-column">
            <div className="footer-about">
              <h3>Aarsh Emporium</h3>
              <p>Where Quality Meets Elegance.✨✨✨ </p>
            </div>
            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons">
                <div>
                  {/* <FaDiscord className="icons" /> */}
                  <a
                    href="https://www.linkedin.com/in/aarsh-vishwakarma-121353258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank">
                    <FaLinkedin className="icons" />
                  </a>

                </div>
                <div>
                  {/* <FaInstagram className="icons" /> */}
                  <a
                    href="https://www.instagram.com/aarsh.vishwakarma/saved/"
                    target="_blank">
                    <FaInstagram  className="icons" />
                  </a>

                </div>
                <div>
                  <a
                    href="https://t.me/aarshvishwakarma"
                    target="_blank">
                    <FaTelegram className="icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Call Us</h3>
             <a href="tel:8299745454"> <h4 className="callmel">+91 8299745454</h4></a>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} AarshEmporium. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  .contact-short {
    max-width: 70vw;
    margin: auto;
    padding: 4rem 8rem;
    background-color: #ffe6f7;
    border-radius: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(50%);
    text-align: center;
    animation: float 3s ease-in-out infinite;

    .grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .btn {
      font-size: 1.6rem;
      padding: 1rem 2rem;
      background: linear-gradient(90deg, #ff758c, #ff7eb3);
      border: none;
      border-radius: 0.5rem;
      color: #fff;
      transition: transform 0.2s ease-in-out, background-color 0.3s ease;

      &:hover {
        transform: scale(1.05);
        background: linear-gradient(90deg, #ff7eb3, #ff758c);
      }
    }
  }

  footer {
    padding: 10rem 0;
    background-color: #4b0082;
    color: #fff;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: #ff69b4;
      font-family: 'Pacifico', cursive;
      animation: pop-in 1s ease-in-out;
    }
    
    p {
      font-size: 1.4rem;
      color: #ffffff;
    }
    
    .footer-about {
      h3 {
        font-size: 2.4rem;
        color: #ff69b4;
        animation: bounceIn 1.5s;
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        animation: fadeInUp 1s;

        input[type="email"] {
          padding: 1rem;
          border-radius: 0.5rem;
          border: none;
          outline: none;
          font-size: 1.6rem;
          background-color: #ffd1dc;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #ffe4e1;
          }
        }

        input[type="submit"] {
          padding: 1rem;
          border: none;
          border-radius: 0.5rem;
          background-color: #ff69b4;
          color: #fff;
          cursor: pointer;
          font-size: 1.6rem;
          transition: background-color 0.3s ease, transform 0.3s ease;

          &:hover {
            background-color: #ff1493;
            transform: scale(1.05);
          }
        }
      }
    }

    .footer-social {
      .footer-social--icons {
        display: flex;
        gap: 2rem;
        animation: bounceIn 2s;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          background-color: #ffb6c1;
          transition: background-color 0.3s ease, transform 0.3s ease;

          &:hover {
            background-color: #ff69b4;
            transform: scale(1.1);
          }

          .icons {
            color: #fff;
            font-size: 2rem;
            animation: rotateIn 1s;
          }
        }
      }
    }

    .footer-contact {
      h4.callmel {
        color: #ff69b4;
        font-size: 1.8rem;
        font-weight: bold;
        padding: 1rem;
        border-radius: 0.5rem;
        background-color: #ffb6c1;
        transition: background-color 0.3s ease, transform 0.3s ease;
        animation: pulse 2s infinite;

        &:hover {
          background-color: #ff1493;
          transform: scale(1.05);
        }
      }
    }

    .footer-bottom--section {
      margin-top: 5rem;
      
      hr {
        margin-bottom: 2rem;
        border: none;
        border-top: 1px solid #ffd1dc;
      }

      .grid {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          margin: 0;
        }

        div {
          display: flex;
          gap: 1rem;

          p {
            cursor: pointer;
            transition: color 0.3s ease;

            &:hover {
              color: #ff69b4;
              animation: swing 1s;
            }
          }
        }
      }
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pop-in {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes bounceIn {
    0%, 20%, 40%, 60%, 80%, 100% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
      transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
      transform: scale3d(0.9, 0.  9);
    }
    60% {
      opacity: 1;
      transform: scale3d(1.03, 1.03, 1.03);
    }
    80% {
      transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes rotateIn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes swing {
    15% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(3px);
    }
    70% {
      transform: translateX(-3px);
    }
    85% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 90vw;
      padding: 3rem 4rem;
    }

    footer {
      padding: 5rem 0;

      .footer-bottom--section {
        padding-top: 4rem;
      }
    }
  }
`;

export default Footer;

