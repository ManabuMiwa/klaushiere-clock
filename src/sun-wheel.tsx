import React from "react"
import { KlaushierianTime } from "./klaushierian-time"
import { ReactComponent as Outer } from "./imgs/outer.svg"

type SunWheelProps = { time: KlaushierianTime }

export default function SunWheel(props: SunWheelProps) {
  const isNotDapre = props.time.period !== 'dapre'
  const style: React.CSSProperties = {
    transform: `rotate(${props.time.outerAngle}deg)`,
    filter: `grayscale(${isNotDapre ? '0%' : '75%'}) brightness(${isNotDapre ? 1 : .5})`,
    transition: 'filter 5s'
  }
  return <Outer style={style} />
}
