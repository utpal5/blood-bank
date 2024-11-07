
//create middelware to protect route like blood realated data
//without token not verify then it will throws an error
//decrypt
const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    //token in header file
    const token = req.headers["authorization"].split(" ")[1];
    //decrypt krne ke environment variable ,e key hai use use krenge 
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
        //if error then check it 
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        //in decoded in user
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failedd",
    });
  }
};