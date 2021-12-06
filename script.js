// Pattern creation
/** Create a class called Singleton */
class Singleton {
  /** Private static prop where this unique instance will be store */
  static instance = null

  /** Private counter property uses to show the unicity of instance */
  counter = null

  /** Simple private constrcutor */
  constructor() {
    this.counter = 0
  }

  /** Method who check and create instance if not exists */
  static getInstance() {
    if(this.instance === null) {
      this.instance = new Singleton()
    }

    return this.instance
  }

  /** Return the non static counter prop */
  getCounter() {
    return this.counter
  }

  /** Increment the non static counter prop */
  increment() {
    this.counter++
  }
}

// Pattern usage
console.log(Singleton.getInstance().getCounter())
Singleton.getInstance().increment()
console.log(Singleton.getInstance().getCounter())
Singleton.getInstance().increment()
Singleton.getInstance().increment()
Singleton.getInstance().increment()
console.log(Singleton.getInstance().getCounter())