import transactionSchema from "./transSchema.js";

// add new transaction
export const insertTransaction = (transaction) => {
    return transactionSchema(transaction).save();
}

// @filter is an obj
// get trans
export const getTransaction = (filter) => {
    return transactionSchema.find(filter)
}