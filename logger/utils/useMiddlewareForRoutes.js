const express = require("express");
module.exports = function(functions, _routes){
    const router = express.Router({ mergeParams: true });
    const routes = [].concat(_routes);
    const funcRouter = router.use(functions);
    routes.forEach(element => {
        //console.log(element);
        element.stack.forEach(element2 => {
            //console.log(element2);
            Array.prototype.splice.apply(element2.route.stack, [0, 0].concat(funcRouter.stack))
        })
        //Array.prototype.splice.apply(element.stack, [0, 1].concat(funcRouter.stack))
    });
    return _routes;
}