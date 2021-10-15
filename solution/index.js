// solution/index.js
module.exports = function (Homework) {

    // async call
    async function ac(fn, ...args) {
        const cb = () => {
            return new Promise((resolve) => {
                fn(...args, (result) => resolve(result))
            })
        }

        return await cb()
    }

    return (array, fn, initialValue, cb) => {
        fnc = async () => {
            size = await ac(asyncArray.length)
            // console.log("length", size)
            // i = await ac(add, 5, 10)
            // console.log("i is", i)
            i = 0
            let elem
            let accumulator = initialValue
            // condition = await ac(lessOrEqual, i, size)
            // console.log("condition", condition)/
            while (await ac(less, i, size)) {
                elem = await ac(asyncArray.get, i)
                accumulator = await ac(fn, accumulator, elem, i, asyncArray)
                i = await ac(add, i, 1)
                console.log(elem, accumulator, i)
            }
            return accumulator
        }
    
        fnc().then(res => cb(res))
    }
}