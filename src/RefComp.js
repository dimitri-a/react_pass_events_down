import React, { Component } from 'react'
import styled from "styled-components";

const Input = styled.input`
color:red
`

export default class RefComp extends Component {
    handleChange = (e) => {
        console.log('input=',this.input.value);
        //console.log('value=',e.target.value);
    }

    render() {
        return (
            <div>
                <Input type="text" innerRef={element => this.input = element}  onChange={this.handleChange}></Input>
            </div>
        )
    }
}
