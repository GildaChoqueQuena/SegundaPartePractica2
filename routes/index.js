var express = require('express');
const USER = require('../datbase/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({msn: "parte2 de la practica"})
});
router.post('/user',async(req,res,next) =>{
  var params = req.body;
  params["registerDate"]= new Date();
  var user = new USER (params);
  user.save().then(()=>{
    res.status(200).json({msn:"usuario creado exitosamente" })
  });
});

router.get('/user',async(req, res,next)=>{
  var list=await USER.find({});
  res.status(200).json(list);
});

router.put('/user',async(req,res,next) =>{
  var params = req.body;
  var id=req.query.id;
  if(id==null){
    res.status(300).json({msn:"parámetros incorrectos: especifique el ususario que desea actualizar"});
    return;
  }
  params["updateDate"] = new Date();
  var userUpdate= await USER.findOneAndUpdate({_id:id},params);
  res.status(200).json({msn: "usuario actualizado correctamente"});
});

router.delete("/user", async(req, res) => {
  var id = req.query.id;
  if(id == null){
    res.status(300).json({
       msn: "Introducir id del usuario que desea eliminar"
    });
    return;
  }
  var result = await USER.remove({_id: id})
  res.status(200).json(result);
});
module.exports = router;
