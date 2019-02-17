module.exports = mongodb => async ({ collectionName, findObject, filterObject }, { success, failure }) => {
    try {
      let data = await mongodb.collection(collectionName).find(findObject, filterObject).toArray();     
      return success({ data: data })
    } catch (err) {
      return failure({ message: err.toString() })
    }
  } 