import { KlaushierianTime, Periods } from './klaushierian-time'

describe('KlaushierianTime class', () => {
  let subject: KlaushierianTime
  const date = '1970-01-01T'

  describe('minutes getter', () => {
    it('should return correct Klaushierian minutes', () => {
      type TestCase = {
        time: string
        expected: number
      }

      const testCases: TestCase[] = [
        { time: '00:00:00', expected: 0 },
        { time: '01:00:00', expected: 100 },
        { time: '05:30:00', expected: 550 },
        { time: '09:59:59', expected: 999 },
        { time: '10:00:00', expected: 0 },
        { time: '11:00:00', expected: 100 },
        { time: '15:30:00', expected: 550 },
        { time: '19:59:59', expected: 999 },
        { time: '20:00:00', expected: 0 },
        { time: '21:00:00', expected: 100 },
        { time: '23:59:59', expected: 399 }
      ]
      testCases.forEach(c => {
        subject = new KlaushierianTime(new Date(date + c.time))
        expect(subject.minutes).toBe(c.expected)
      })
    })
  })

  describe('period getter', () => {
    it('should return correct Klaushierian period', () => {
      type TestCases = {
        time: string
        expected: Periods
      }
      
      const testCases: TestCases[] = [
        { time: '00:00:00', expected: 'pre' },
        { time: '01:00:00', expected: 'pre' },
        { time: '05:30:00', expected: 'pre' },
        { time: '09:59:59', expected: 'pre' },
        { time: '10:00:00', expected: 'rep' },
        { time: '11:00:00', expected: 'rep' },
        { time: '15:30:00', expected: 'rep' },
        { time: '19:59:59', expected: 'rep' },
        { time: '20:00:00', expected: 'dapre' },
        { time: '21:00:00', expected: 'dapre' },
        { time: '23:59:59', expected: 'dapre' }
      ]

      testCases.forEach(c => {
        subject = new KlaushierianTime(new Date(date + c.time))
        expect(subject.period).toBe(c.expected)
      })
    })
  })

  describe('toString method', () => {
    it('should return string representation of corresponding Klaushierian time', () => {
      type TestCase = {
        time: string
        expected: string
      }

      const testCases: TestCase[] = [
        { time: '00:00:00', expected: '0 pre' },
        { time: '01:00:00', expected: '100 pre' },
        { time: '05:30:00', expected: '550 pre' },
        { time: '09:59:59', expected: '999 pre' },
        { time: '10:00:00', expected: '0 rep' },
        { time: '11:00:00', expected: '100 rep' },
        { time: '15:30:00', expected: '550 rep' },
        { time: '19:59:59', expected: '999 rep' },
        { time: '20:00:00', expected: '0 dapre' },
        { time: '21:00:00', expected: '100 dapre' },
        { time: '23:59:59', expected: '399 dapre' }
      ]

      testCases.forEach(c => {
        subject = new KlaushierianTime(new Date(date + c.time))
        expect(subject.toString()).toBe(c.expected)
      })
    })
  })

  describe('outerAngle getter', () => {
    it('should return angle of outer wheel', () => {
      type TestCase = {
        time: string
        expected: number
      }
  
      const testCases: TestCase[] = [
        { time: '00:00:00', expected: 360 },
        { time: '03:00:00', expected: 252 },
        { time: '06:00:00', expected: 144 },
        { time: '09:00:00', expected: 36 },
        { time: '09:59:59', expected: 0.009999999999990905 }
      ]  

      testCases.forEach(c => {
        subject = new KlaushierianTime(new Date(date + c.time))
        expect(subject.outerAngle).toBe(c.expected)
      })
    })
  })

  describe('midAngle getter', () => {
    it('should return angle of mid wheel', () => {
      type TestCase = {
        time: string
        expected: number
      }
  
      const testCases: TestCase[] = [
        { time: '00:00:00', expected: 0 },
        { time: '00:15:00', expected: 90 },
        { time: '00:30:00', expected: 180 },
        { time: '00:45:00', expected: 270 },
        { time: '03:00:00', expected: 0 },
        { time: '05:15:00', expected: 90 },
        { time: '07:30:00', expected: 180 },
        { time: '09:45:00', expected: 270 },
        { time: '09:59:59', expected: 359.89999999999964 }
      ]  

      testCases.forEach(c => {
        subject = new KlaushierianTime(new Date(date + c.time))
        expect(subject.middleAngle).toBe(c.expected)
      })
    })
  })

  describe('innerAngle getter', () => {
    it('should return angle of inner wheel', () => {
      type TestCase = {
        time: string
        expected: number
      }
  
      const testCases: TestCase[] = [
        { time: '00:00:00', expected: 0 },
        { time: '09:59:59', expected: 0 },
        { time: '10:00:00', expected: 0 },
        { time: '11:00:00', expected: 0 },
        { time: '19:59:59', expected: 0 },
        { time: '20:00:00', expected: 360 },
        { time: '22:00:00', expected: 180 },
        { time: '23:59:59', expected: 0.025000000000034106 }
      ]  

      testCases.forEach(c => {
        subject = new KlaushierianTime(new Date(date + c.time))
        expect(subject.innerAngle).toBe(c.expected)
      })
    })
  })
})
