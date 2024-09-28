const express = require("express")
const router = express.Router()

let gethome = require("../controller/client").gethome
let trackResult = require("../controller/client").trackResult

router.get('/', gethome)
router.post('/track',trackResult)





exports.router = router