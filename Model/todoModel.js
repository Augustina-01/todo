import mongoose from 'mongoose'
const todoschema=mongoose.Schema({
    todo: {type:String,require:true,unique:true}
})
const todoCollection =mongoose.model("todos",todoschema)
export default todoCollection;