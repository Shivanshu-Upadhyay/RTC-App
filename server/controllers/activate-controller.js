class ActivateController{
    async activateUser(req,res){
res.status(200).json({
    message:"hey thr"
})
    }
}

module.exports = new ActivateController();