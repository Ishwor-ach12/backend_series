 const asyncHandler = (requestHandler) => {
  (req,res,next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
  
 }





export {asyncHandler}


// const asyncHandler = (fn) => async (req, res, next) =>{
//   try {
//     await fn(req,res,next)
//   } catch(error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message
//     })
//   }
// } For try catch 

// Here we took one function and passed it to another async funciton therefor two parenthesis is there () function 1 => async() function two => {}  task to handle, second function is called higher order function. Normally we can write this as () => {async () => {}}
