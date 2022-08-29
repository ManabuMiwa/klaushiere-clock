export type Periods = 'pre' | 'rep' | 'dapre'

export class KlaushiereTime {
  private _time: Date

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
}
