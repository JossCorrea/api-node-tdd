let  model= require('../models/maravilhosas-models');

const getMaravilhosas = (req, res)=> {
    console.log('getMaravilhosas')
    model.selectAllData()
    res.status(200).json({"message": "getMaravilhosas Sucesso"});
};

const getMaravilhosaById = (req, res)=>{
    console.log('getMaravilhosaById')
    model.selectDataById(req.params.id)
    res.status(200).json({"message": "getMaravilhosaById Sucesso"});
};

const addMaravilhosa = (req, res)=>{
    console.log('addMaravilhosa')
    model.insertData(req.body)
    res.status(200).json({"message": "addMaravilhosa Sucesso"});
};

const updateMaravilhosa = (req, res)=>{
    console.log('updateMaravilhosa')
    model.updateData(req.params.id, req.body)
    res.status(200).json({"message": "updateMaravilhosa Sucesso"});
};

const deleteMaravilhosa = (req, res)=>{
    console.log('deleteMaravilhosa')
    model.deleteData(req.params.id)
    res.status(200).json({"message": "deleteMaravilhosa Sucesso"});
};

module.exports = {
    getMaravilhosas,
    getMaravilhosaById,
    addMaravilhosa, 
    updateMaravilhosa,
    deleteMaravilhosa
}
