import React from "react"
import { Text } from "gatsby"
import styled from "styled-components"

import Stamp from "./stamp"

const Entry = ({ props }) => {
  return (
    <Container props={props}>
      {/* <Text>Farfetch 👗👠</Text> */}
      <Stamp text="iOS Engineer" />
      <Stamp text="Jun 2017 - Present" />
    </Container>
  )
}

const Container = styled.div`
  background: "#EEE";
  text-align: "center";
  border-radius: "4px";
  padding: "0.5rem";
  text-transform: "uppercase";
  font-weight: "600";
  font-size: "12px";
  letter-spacing: ".1rem";
  font-family: "Consolas Bold", "HelveticaNeue", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
`

export default Entry
