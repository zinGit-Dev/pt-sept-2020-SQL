const { mpaaNotNull } = require("../../queries/movies")

module.exports =db => async (req, res, next)=>{
    try{
        const result = await mpaaNotNull(db)

        if(!result){
            next(new Error("something went wrong with result"))
            return
        }
        const {rows, rowsCount}= result
        res.status(200).json({
            success: true,
            len:rowsCount,
            data: rows
        })

    }catch(error){
        console.info(">somehing went wrong")
    }
}