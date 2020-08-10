export default class FizzBuzz {


    printFirstNResults = (num: number): string[] => {
        const result: string[] = []

        for (let i: number = 1; i <= num; i++) {
            result.push(this.getFizzBuzz(i))
        }

        return result
    }

    private getFizzBuzz = (num: number): string => {
        if (num % 15 === 0) {
            return 'FizzBuzz'
        }else if (num % 3 === 0 || num.toString().indexOf('3') > -1) {
            return 'Fizz'
        } else if (num % 5 === 0 || num.toString().indexOf('5') > -1) {
            return 'Buzz'
        }  else {
            return num.toString()
        }
    }
    
}
