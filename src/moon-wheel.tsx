import React from "react"
import { KlaushierianTime } from "./klaushierian-time"
import { ReactComponent as Mid } from "./imgs/middle.svg"

type MoonWheelProps = { time: KlaushierianTime }

export default function MoonWheel(props: MoonWheelProps) {
  const style: React.CSSProperties = {
    transform: `rotate(${props.time.middleAngle}deg)`,
  }
  return <Mid style={style} title="Moon Wheel" />
}
