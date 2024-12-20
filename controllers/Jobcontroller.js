import Job from "../Model/JobModel.js"

export function AddJob (req,res){

    const newJobdata = req.body

    const job = new Job(newJobdata)

    job.save().then(()=>{
        res.json({
            message: "Job added..!"
        })
    }).catch((error)=>{
        res.json({
            message: error
        })
    })

}



