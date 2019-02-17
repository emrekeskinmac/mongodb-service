module.exports = mongodb => async ({ collectionName, findObject }, { success, failure }) => {
    try {
        await mongodb.collection(collectionName).findOneAndDelete(findObject);
        return success({ result: true })
    } catch (err) {
        return failure({ message: err.toString() })
    }
} 