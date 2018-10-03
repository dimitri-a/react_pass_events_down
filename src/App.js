import React from 'react'
import styled from 'styled-components'

const Bar = styled.h2`
color:${props => props.primary ? 'red' : 'blue'}
background: yellow
`


const Plain = styled(Bar)`
color: green
`


export default () => {
    return (
        <div>
            <Bar >
                this is normal
             </Bar>
            <Bar primary>
                this is primary
             </Bar>

            <Plain>Me plain</Plain>
        
        </div>
    )
}
