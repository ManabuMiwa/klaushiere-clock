export type Periods = 'pre' | 'rep' | 'dapre'

/** Class replesents time system used in Klaushiere */
export class KlaushiereTime {
  private _time: Date

  /**
   * @param [time=new Date()] - A Date object used for initializing a instance
   */
  constructor(time?: Date) {
    this._time = time ?? new Date()
  }

  get minutes(): number {
    const h = this._time.getHours()
    const m = this._time.getMinutes()
    const s = this._time.getSeconds()
    const ms = this._time.getMilliseconds()

    const timeInMs = h * 3600000 + m * 60000 + s * 1000 + ms
    return Math.floor(timeInMs / 36000) % 1000
  }

  get period(): Periods {
    const hours = this._time.getHours()
    if (hours < 10) return 'pre'
    if (hours < 20) return 'rep'
    return 'dapre'
  }

  /** Returns a string representation of a instance */
  toString() {
    return `${this.minutes} ${this.period}`
  }
}
