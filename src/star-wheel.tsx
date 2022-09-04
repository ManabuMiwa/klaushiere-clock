import React from "react"
import { KlaushierianTime } from "./klaushierian-time"
import { ReactComponent as Inner } from "./imgs/inner.svg"

type StarWheelProps = { time: KlaushierianTime }

export default function StarWheel(props: StarWheelProps) {
  const style: React.CSSProperties = {
    transform: `rotate(${props.time.innerAngle}deg)`,
  }
  return <Inner style={style} />
}
