import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  color: "black";
  padding: .6em;
  background-color: #fff;
  border-bottom: 1px solid #29303e;
  
  h3 {
    color: #bfc1c8;
  }

  @media only screen and (min-width: 800px) {
    padding: 0.7em;
  }
`
