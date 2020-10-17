let  model= require('../models/maravilhosas-models');

//getMaravilhosas


//getMaravilhosaById


const getMaravilhosas = (req, res)=> {
    const { error, data } = model.selectAllData()
    if (error === null){
        res.status(200).json(data);
    }else{
        res.status(400).json({"message": error.message});
    }
};

const getMaravilhosaById = (req, res)=>{
    const id = parseInt(req.params.id)
    const { error, data } = model.selectDataById(id)
    if (error === null){
        res.status(200).json(data);
    }else{
        res.status(400).json({"message": error.message});
    }
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
