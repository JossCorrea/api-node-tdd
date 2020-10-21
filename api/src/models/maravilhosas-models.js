let dados = require('../data/data.json')

function selectAllData() {

    return {error: null, data: dados}
}

function selectDataById(id) {
    const dadoEncontrado = dados.find(item => item.id === id)

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
