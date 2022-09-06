import React from "react"
import { KlaushierianTime } from "./klaushierian-time"
import { ReactComponent as Inner } from "./imgs/inner.svg"

type StarWheelProps = { time: KlaushierianTime }

export default function StarWheel(props: StarWheelProps) {
  const isDapre = props.time.period === 'dapre'
  const style: React.CSSProperties = {
    transform: `rotate(${props.time.innerAngle}deg)`,
    filter: `grayscale(${isDapre ? '0%' : '75%'}) brightness(${isDapre ? 1 : .5})`,
    transition: 'filter 5s'
  }
  return <Inner style={style} title="Star Wheel" />
}
