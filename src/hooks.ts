import {useState, useEffect, CSSProperties} from 'react'

const scGap : number = 0.01 
const delay : number = 25

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)

    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}

const sinify = (scale : number) : number => Math.sin(scale * Math.PI)

export const useStyle = (w : number, h : number, scale : number) => {
    const sf : number = sinify(scale)
    const position = 'absolute'
    const size : number = Math.min(w, h) / 6.9 
    const background : string = "green"
    return {
        blockStyle(i : number) : CSSProperties {
            const width = `${size}px`
            const height = `${size}px`
            const left = `${w / 2 - size + size * i - (1 - 2 * i) * (w / 2 - size) * sf}px`
            const top = `${h / 2 - size / 2}px`
            const alignItems = 'center'
            let justifyContent = 'flex-end'
            if (i === 1) {
                justifyContent = 'flex-start'
            }
            const color = 'white'
            const fontSize = `${size / 4}px`
            const display = 'flex'
            return {
                position,
                left, 
                top, 
                width, 
                height,
                background,
                alignItems, 
                justifyContent,
                color, 
                fontSize,
                display
            }
        }
    }
}