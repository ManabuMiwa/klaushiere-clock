export type Periods = 'pre' | 'rep' | 'dapre'

/** Class replesents time system used in Klaushiere */
export class KlaushierianTime {
  private _time: Date

  /**
   * @param [time=new Date()] - A Date object used for initializing a instance
   */
  constructor(time?: Date) {
    this._time = time ?? new Date()
  }

  private get _klaushierianTime(): number {
    const h = this._time.getHours()
    const m = this._time.getMinutes()
    const s = this._time.getSeconds()
    const ms = this._time.getMilliseconds()

    const timeInMs = h * 3600000 + m * 60000 + s * 1000 + ms
    return timeInMs / 36000 % 1000
  }

  get minutes(): number {
    return Math.floor(this._klaushierianTime)
  }

  get period(): Periods {
    const hours = this._time.getHours()
    if (hours < 10) return 'pre'
    if (hours < 20) return 'rep'
    return 'dapre'
  }

  get outerAngle(): number {
    return this.period !== 'dapre'
      ? 360 - this._klaushierianTime / (1000 / 360)
      : 0
  }

  get middleAngle(): number {
    return this._klaushierianTime / (100 / 360) % 360
  }

  get innerAngle(): number {
    return this.period === 'dapre'
      ? 360 - this._klaushierianTime / (400 / 360)
      : 0
  }

  /** Returns a string representation of the instance */
  toString() {
    return `${this.minutes} ${this.period}`
  }
}
