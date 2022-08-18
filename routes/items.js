const express = require("express")
const router = new express.Router()
const ExpressError = require("../expressError")
const items = require("../fakeDb")

router.get("/", function(req, res, next){
    try {
      return res.json({items: items.findAll()});
    } catch(err){
      return next(err)
    }
});

router.post("/", function (req, res, next) {
    try {
      let addItem = new Item(req.body.name, req.body.price);
      return res.json({item: addItem});
    } catch (err) {
      return next (err)
    }
});

router.get("/:name", function (req, res, next){
    try {
      let singleItem = Item.find(req.params.name);
      return res.json({item:singleItem});
    } catch (err) {

    }
     return next()
});

router.patch("/:name", function (req, res, next){
    try {
      let singleItem = Item.update(reg.params.name, req.body);
      return res.json({item: singleItem});
    } catch (err) {
        
    }
      return next(err)
});

router.delete("/:name", function(req, res, next){
    try {
      Item.remove(req.params.name({message: "Item has been deleted"}));
      return res.json();
    } catch (err){
      return next(err)  
    }
});

module.exports = router;