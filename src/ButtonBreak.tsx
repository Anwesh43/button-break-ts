import React, {Fragment} from 'react'
import withContext from './withContext'
import {useStyle} from './hooks'

interface ButtonBreakProps {
    w : number, 
    h : number, 
    scale : number,
    onClick : Function 
}

const ButtonBreak = (props : ButtonBreakProps) => {
    const {blockStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <Fragment>
            {[0, 1].map((i : number) => (<div key = {`block_${i}`} style = {blockStyle(i)}></div>))}
        </Fragment>
    )
}

export default withContext(ButtonBreak)