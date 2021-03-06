import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Submit = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

class SubmitButton extends Component {
    render () {
        return (
            <Submit type="submit">Submit</Submit>
        )
    };
}

export default SubmitButton;