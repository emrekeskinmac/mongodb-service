module.exports = mongodb => async ({ collectionName, saveObject }, { success, failure }) => {
  try {
    let data = await mongodb.collection(collectionName).insertOne(saveObject);
    return success({ id: data.insertedId })
  } catch (err) {
    return failure({ message: err.toString() })
  }
} 