import React from "react"
import styled from "styled-components"

const Tag = (props) => {
  return (
    <Container props={props}>
      <Title props={props} href={`${props.href}`} target="_blank">
        {props.text}
      </Title>
  </Container>
  );
};

// style={{
//   background: ${props.background},
//   color: ${props => props.props.color || "white"},
//   borderRadius: ${props => props.props.radius || "1px"},
// }}

const Container = styled.span`
  background: ${props => props.props.background || "transparent"};
  background-color: ${props => props.props.background || "transparent"};
  border: none;
  cursor: pointer;
  border-radius: 1px;
  text-decoration: none !important;
  &:hover {
    opacity: 0.8;
  }
`

const Title = styled.a`
  background: ${props => props.props.background || "transparent"};
  background-color: ${props => props.props.background || "transparent"};
  color: ${props => props.props.color || "white"};
  text-decoration: none !important;
  text-transform: strong;
  &:hover {
    opacity: 0.8;
  }
`

export default (props) => <Tag {...props} />;

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
