import FizzBuzz from '../src/fizzBuzz'

describe('FizzBuzz', () => {

    const fizzBuzz = new FizzBuzz()

    it('should return Fizz', () => {
        expect(fizzBuzz.printFirstNResults(3)[2]).toEqual('Fizz')
        expect(fizzBuzz.printFirstNResults(53)[52]).toEqual('Fizz')
    })

    it('should return Buzz', () => {
        expect(fizzBuzz.printFirstNResults(5)[4]).toEqual('Buzz')
        expect(fizzBuzz.printFirstNResults(56)[55]).toEqual('Buzz')
    })

    it('should return FizzBuzz', () => {
        expect(fizzBuzz.printFirstNResults(15)[14]).toEqual('FizzBuzz')
    })

    it('should return the same number', () => {
        expect(fizzBuzz.printFirstNResults(3)[0]).toEqual('1')
    })  

    it('should return Fizz, Buzz, FizzBuzz or the number itself depending on the division result', () => {
        expect(fizzBuzz.printFirstNResults(15)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', 'Fizz', '14', 'FizzBuzz'])
    })

})
