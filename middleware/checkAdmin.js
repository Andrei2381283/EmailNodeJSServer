module.exports = (req,res,next) => {
    const admin_key = req.body.admin_key;
    if(global.admin_key == admin_key) next();
    else res.status(400).send("Wrong admin_key");
};