let dados = require('../data/data.json')

function selectAllData() {
    console.log('Model selectAllData')
}

function selectDataById(id) {
    const dadoEncontrado = dados.find(item => item.id === id)
    console.log('dado',dadoEncontrado)

    if (dadoEncontrado){
        return {error: null, data: dadoEncontrado}
    } else{
        return {error: {message:"Registro não encontrado na base"}, data: null}
    }
}

function insertData(novaMaravilhosa) {
    console.log('Model insertData',novaMaravilhosa)
}

function updateData(id, novaMaravilhosa) {
    console.log('Model updateData ',id,novaMaravilhosa)
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
