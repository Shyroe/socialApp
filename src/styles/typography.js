import React from "react";
import styled from "styled-components/native";

export const Text = styled.Text`
  font-family: "sans-serif";
  color: ${(props) => props.color ?? "#343434"};

  ${({ title, large, medium, small }) => {
    switch (true) {
      case title:
        return `font-size: 32px`;
        break;
      case large:
        return `font-size: 20px`;
        break;
      case medium:
        return `font-size: 16px`;
        break;
      case small:
        return `font-size: 13px`;
        break;
      default:
        return `font-size: 14px`;
    }
  }}

  ${({ bold, heavy, light }) => {
    switch (true) {
      case light:
        return `font-weight: 200`;
        break;
      case bold:
        return `font-weight: 600`;
        break;
      case heavy:
        return `font-weight: 700`;
        break;
      default:
        return `font-weight: 400`;
    }
  }}

${({ center, right }) => {
  switch (true) {
    case center:
      return `text-align: center`;
      break;
    case right:
      return `text-align: right`;
      break;
    default:
      return `text-align: left`;
  }
}}


`;

export default TextStyle = ({ ...props }) => {
  return <Text {...props}>{props.children}</Text>;
};
