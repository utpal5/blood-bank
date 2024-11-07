 // arrow fn and make call back fn to add request and response 
 // not use export it throws an error so we add export bottom side 
  const testController = (req,res) => {
    res.status(200).send({
        message: "welcome server",
        success: true,
    });
};

module.exports = {testController};