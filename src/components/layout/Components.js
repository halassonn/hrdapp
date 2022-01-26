import styled, { keyframes } from "styled-components";

export const Mainwrapper = styled.div`
  background-color: "red";
`;

export const fade = keyframes`
0% { opacity:0 }
30% {  opacity: 0.5 }
40% { opacity: 0.7; }
100% {  opacity: 1; }
`;
