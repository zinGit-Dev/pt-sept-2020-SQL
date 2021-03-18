const { lessGross50 } = require("../../queries/movies")

module.exports = db =>async (req, res, next)=>{
    try{

        const result = await lessGross50(db)

        if(!result) {
            next(new Error('something went wrong with result'))
            return
          }
          const {rows, rowscount} = result

        res.status(200).json({
            success:true,
            data:rows,
            len: rowscount
        })
    }catch(error){
        console.info(">something went wrong:", error.message)
    }
}