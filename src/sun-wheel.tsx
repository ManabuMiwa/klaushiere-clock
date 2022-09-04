import React from "react"
import { KlaushierianTime } from "./klaushierian-time"
import { ReactComponent as Outer } from "./imgs/outer.svg"

type SunWheelProps = { time: KlaushierianTime }

export default function SunWheel(props: SunWheelProps) {
  const style: React.CSSProperties = {
    transform: `rotate(${props.time.outerAngle}deg)`,
  }
  return <Outer style={style} />
}
