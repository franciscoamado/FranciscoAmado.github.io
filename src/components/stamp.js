import React from "react"
import styled from "styled-components"

const Stamp = (props) => <Container props={props}>{props.text}</Container>

const Container = styled.label`
  color: ${(props) => props.props.color || "#000"};
  font-family: "Consolas Bold", "HelveticaNeue", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: ${(props) => props.props.fontSize || "1.3rem"};
  text-align: right;
`

export default Stamp
