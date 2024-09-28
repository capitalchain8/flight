
const { History, Cossignment } = require("../database/databaseConfig");

module.exports.gethome = async (req, res, next) => {
   res.status(200).render('home')
}

module.exports.trackResult = async (req, res, next) => {
   try {

      return res.status(200).render('track-result')
      let {
         wpcargo_tracking_number,
      } = req.body


      let foundCossinment = await Cossignment.findOne({courier_Reference_No: wpcargo_tracking_number })

      console.log(foundCossinment)

      if (!foundCossinment) {
         return res.status(200).render('track-empty')
      }

      //get all history of the cossigment

      let historys = await History.find({ cossignment: foundCossinment })
      console.log(historys)

      return res.status(200).render('track-result',{
         cossignment:foundCossinment,
         historys:historys
      })

   } catch (err) {
      return res.status(200).render('track-empty')
   }
}














































































