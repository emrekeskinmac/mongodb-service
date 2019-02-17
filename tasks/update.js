module.exports = mongodb => async ({ collectionName, findObject, updateObject }, { success, failure }) => {
    try {
        await mongodb.collection(collectionName).updateOne(findObject, { $set: updateObject });
        return success({ result: true })
    } catch (err) {
        return failure({ message: err.toString() })
    }
} 