// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import Nav from "./Nav";

// const Header = () => {
//   return (
//     <MainHeader>
//       <NavLink to="/">
//         <img src="./images/logo.png" alt="my logo img" />
//       </NavLink>
//       <Nav />
//     </MainHeader>
//   );
// };

// const MainHeader = styled.header`
//   padding: 0 4.8rem;
//   height: 10rem;
//   /*background-color: ${({ theme }) => theme.colors.bg};*/
//   background-color :"#FFFFFF";
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;

//   .logo {
//     height: 5rem;


//   }
// `;
// export default Header;
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="logo-link">
        <img src="./images/logo (2).png" alt="my logo img" className="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 3rem;


  &:hover {
    background-color: 		#5907b4;
    transform: translateY(-3px); /* Example animation */
  }

  .logo {
    height: 7rem;
    width:26rem;
    transition: transform 0.3s ease-in-out;
  }

  .logo-link:hover .logo {
    transform: scale(1.1);
  }

  .logo-link:focus .logo {
    transform: scale(1.1);
  }

  .logo-link:active .logo {
    transform: scale(1.05);
  }
`;

export default Header;
