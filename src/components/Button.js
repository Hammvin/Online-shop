import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background:transparent;
border: 0.05rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor; pointer;
margine: 0.2rem 0.5rem .02rem 0;
transition: all 0.5s ease-in-out;
&:hover{
  background:var(--lightBlue);
  color: var(--mainBlue);
}
&:focus{
  outline: none;
}
`