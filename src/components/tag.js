import React from "react"
import styled from "styled-components"

const Tag = (props) => {
  return (
    <Container props={props}>
      <Title props={props} href={`${props.href}`} target="_blank">
        {props.text}
      </Title>
    </Container>
  )
}

const Container = styled.span`
  background: "#000000";
  background-color: "#000000";
  boxShadow: none;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none !important;
  boxShadow: none;
  &:hover {
    opacity: 0.8;
  }
`

const Title = styled.a`
  color: "white";
  text-decoration: none !important;
`

export default (props) => <Tag {...props} />

// const Tag = props => (
//     <a href={`${props.href}`} style={{textDecoration: 'none'}}>
//       <Container>{props.text}</Container>
//     </a>
// )

// const Container = styled.span`
//   display: block;
//   border: none;
//   text-align: center;
//   text-decoration: none;
//   padding: 0.2rem 0.4rem 0.2rem 0.4rem;
//   cursor: pointer;

//   background: ${props => props.props.background || "grey"};
//   color: ${props => props.props.color || "white"};
//   font-size: ${props => props.props.fontSize || "1.5em"};
//   line-height: ${props => props.props.lineHeight || "1.6"};
//   font-weight: ${props => props.props.fontWeight || "bold"};
//   font-family: ${props => props.props.fontFamily || "Raleway"};
//   border-radius: ${props => props.props.radius || "1px"};

//   &:hover {
//     box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
//   }
// `

// export default Tag
