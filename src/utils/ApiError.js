class ApiError extends Error {
  constructor(statusCode, message= "something went wrong", errors = [], statck = ""){
    super(message)
    this.statusCode = statusCode
    this.data = null // find what is there in this.data field
    this.message = message
    this.success = false;
    this.errors = this.errors

    if(statck) {
      this.stack = statck
    } else{
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

export {ApiError}


//Here we have made one huliya of how api error will come and how to handle them customly