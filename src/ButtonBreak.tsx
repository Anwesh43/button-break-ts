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
    const words : Array<string> = ["But", "ton"]
    return (
        <Fragment>
            {[0, 1].map((i : number) => (<div onClick = {() => props.onClick()} key = {`block_${i}`} style = {blockStyle(i)}>{words[i]}</div>))}
        </Fragment>
    )
}

export default withContext(ButtonBreak)