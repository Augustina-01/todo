            import todoCollection from "./Model/todoModel";
export const addTodo=async (req,res)=>{
    try{
        const data = new todoCollection(req.body);
        await data.save()
        res.status(201).json({mess:"data has been stored"})
    } catch(err){
        res.status(500).json({message:err})
    }
} 