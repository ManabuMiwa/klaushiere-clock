import { KlaushiereTime, Periods } from './klaushiere-time'

describe('KlaushiereTime class', () => {
  it('should show each periods', () => {
    const time = new Date()
    let subject: KlaushiereTime

    type TestTableColumn = {
      hours: number
      period: Periods
    }

    const testTable: TestTableColumn[] = [
      { hours: 0, period: 'pre' },
      { hours: 9, period: 'pre' },
      { hours: 10, period: 'rep' },
      { hours: 19, period: 'rep' },
      { hours: 20, period: 'dapre' },
      { hours: 23, period: 'dapre' },
    ]

    testTable.forEach(c => {
      time.setHours(c.hours)
      subject = new KlaushiereTime(time)
      expect(subject.period).toBe(c.period)  
    })
  })

  it('should show correct minutes', () => {
    const time = new Date()
    let subject: KlaushiereTime

    type TestTableColumn = {
      hours: number
      minutes: number
      seconds: number
      expected: number
    }

    const testTable: TestTableColumn[] = [
      { hours: 0, minutes: 0, seconds: 0, expected: 0 },
      { hours: 7, minutes: 0, seconds: 0, expected: 700 },
      { hours: 9, minutes: 59, seconds: 59, expected: 999 },
      { hours: 10, minutes: 0, seconds: 0, expected: 0 },
      { hours: 19, minutes: 59, seconds: 59, expected: 999 },
      { hours: 20, minutes: 0, seconds: 0, expected: 0 },
      { hours: 23, minutes: 59, seconds: 59, expected: 399 },
    ]

    testTable.forEach(c => {
      time.setHours(c.hours, c.minutes, c.seconds)
      subject = new KlaushiereTime(time)
      expect(subject.minutes).toBe(c.expected)  
    })
  })
})
