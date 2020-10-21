const fs = require('fs')

const obterNovoId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}


const novaData = () => new Date().toString()


function estaNoArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'Id não encontrado',
                status: 404
            })
        }
        resolve(row)
    })
}


function escreverNoJSON(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    obterNovoId,
    novaData,
    estaNoArray,
    escreverNoJSON
}