import transactionSchema from "./transSchema.js";

// add new transaction
export const insertTransaction = async (transaction) => {
    return await transactionSchema(transaction).save();
}

// @filter is an obj
// get trans
export const getTransaction = async (filter) => {
    return await transactionSchema.find(filter)
}

//delete 
export const deleteTransaction = async (filter) => {
    return await transactionSchema.findOneAndDelete(filter)
}