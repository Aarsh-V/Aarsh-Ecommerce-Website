// import styled from "styled-components";

// const Contact = () => {
//   const Wrapper = styled.section`
//     padding: 9rem 0 5rem 0;
//     text-align: center;

//     .container {
//       margin-top: 6rem;

//       .contact-form {
//         max-width: 50rem;
//         margin: auto;

//         .contact-inputs {
//           display: flex;
//           flex-direction: column;
//           gap: 3rem;

//           input[type="submit"] {
//             cursor: pointer;
//             transition: all 0.2s;

//             &:hover {
//               background-color: ${({ theme }) => theme.colors.white};
//               border: 1px solid ${({ theme }) => theme.colors.btn};
//               color: ${({ theme }) => theme.colors.btn};
//               transform: scale(0.9);
//             }
//           }
//         }
//       }
//     }
//   `;

//   return (
//     <Wrapper>
//       <h2 className="common-heading">Contact page</h2>

//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
//         width="100%"
//         height="400"
//         style={{ border: 0 }}
//         allowFullScreen=""
//         loading="lazy"
//         referrerPolicy="no-referrer-when-downgrade"></iframe>

//       <div className="container">
//         <div className="contact-form">
//           <form
//             action="https://formspree.io/f/xeqdgwnq"
//             method="POST"
//             className="contact-inputs">
//             <input
//               type="text"
//               placeholder="username"
//               name="username"
//               required
//               autoComplete="off"
//             />

//             <input
//               type="email"
//               name="Email"
//               placeholder="Email"
//               autoComplete="off"
//               required
//             />

//             <textarea
//               name="Message"
//               cols="30"
//               rows="10"
//               required
//               autoComplete="off"
//               placeholder="Enter you message"></textarea>

//             <input type="submit" value="send" />
//           </form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Contact;


import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
background: linear-gradient(90deg, #9b59b6, #8e44ad, #6a1b9a, #4a148c, #7e57c2);    background-size: 300% 300%;
    animation: backgroundAnimation 10s ease infinite;

    @keyframes backgroundAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .cfa {
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
      padding: 1rem;
      background: linear-gradient(90deg, #9b59b6, #8e44ad, #6a1b9a, #4a148c, #7e57c2);

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradient 3s infinite;
      transition: transform 0.2s ease-in-out;
      background-size: 300% 300%;
    }

    .cfa:hover {
      transform: scale(1.1);
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .sticker_1 {
      position: absolute;
      width: 100px;
      height: 100px;
      background: url('./images/gmail4.png') no-repeat center center / cover;
      animation: float 6s ease-in-out infinite;
    }
       .sticker_2 {
      position: absolute;
      width: 100px;
      height: 100px;
      background: url('./images/contactus1.png') no-repeat center center / cover;
      animation: float 6s ease-in-out infinite;
    }
       .sticker_3 {
      position: absolute;
      width: 100px;
      height: 100px;
      background: url('./images/phone2.png') no-repeat center center / cover;
      animation: float 6s ease-in-out infinite;
    }
       .sticker_4 {
      position: absolute;
      width: 100px;
      height: 100px;
      background: url('./images/24hours.jpg') no-repeat center center / cover;
      animation: float 6s ease-in-out infinite;
    }

    .sticker1 { top: 10%; left: 5%; }
    .sticker2 { top: 20%; right: 10%; }
    .sticker3 { bottom: 15%; left: 20%; }
    .sticker4 { bottom: 10%; right: 5%; }

    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
      100% { transform: translateY(0); }
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;
        padding: 2rem;
        border: 1px solid #ddd;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        animation: fadeIn 1s ease-in-out;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          input, textarea {
            width: 100%;
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 1rem;
            transition: all 0.3s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          input:focus, textarea:focus {
            border-color: #6200ea;
            box-shadow: 0 2px 8px rgba(98, 0, 234, 0.3);
            outline: none;
          }

          input[type="submit"] {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.white};
            border: none;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            font-weight: bold;
            text-transform: uppercase;
            transition: all 0.3s;
            box-shadow: 0 4px 8px rgba(98, 0, 234, 0.2);

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(1.05);
            }
          }
        }
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="cfa">Feel free to Contact 📞</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.8433481675497!2d83.14232370167561!3d25.272158166976258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3b74a4af984d%3A0xeed8a96a55faa11d!2sMughalsarai%20Alinagar%20Block!5e0!3m2!1sen!2sin!4v1718437330477!5m2!1sen!2sin"
        width="80%"
        height="275"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Stickers */}
      <div className="sticker_1 sticker1"></div>
      <div className="sticker_2 sticker2"></div>
      <div className="sticker_3 sticker3"></div>
      <div className="sticker_4 sticker4"></div>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xvoeevdq"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
