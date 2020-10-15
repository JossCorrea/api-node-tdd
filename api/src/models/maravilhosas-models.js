let dados = require('../data/data.json')

function selectAllData() {
    console.log('Model selectAllData')
}

function selectDataById(id) {
    console.log('Model selectDataById',id)
}

function insertData(novaMaravilhosa) {
    console.log('Model insertData',novaMaravilhosa)
}

function updateData(id, novaMaravilhosa) {
    console.log('Model updateData ',id,novaMaravilhosa  )
}

function deleteData(id) {
    console.log('Model deleteData',id)
}

module.exports = {
    selectAllData,
    selectDataById,
    insertData, 
    updateData,
    deleteData
}
