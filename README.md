# api-node-tdd




We have 4 functions very useful for models.
getNewId : searching in the array the last id and increment of 1 to return a new id.
newDate : return the date of your server in ISO 8601.
mustBeInArray: return a promise. Using when we need to check if a row exist via the id (Read One, Update and Delete).
writeJSONFile : write new array in the JSON File data.

    obterNovoId,
    novaData,
    estaNoArray,
    escreverNoJSON


# api

# src

* [controllers/](./src/controllers)
  * [maravilhosas-controller.js](./src/controllers/maravilhosas-controller.js)
* [data/](./src/data)
  * [data.json](./src/data/data.json)
* [helpers/](./src/helpers)
  * [helper.js](./src/helpers/helper.js)
* [models/](./src/models)
  * [maravilhosas-models.js](./src/models/maravilhosas-models.js)
* [routes/](./src/routes)
  * [maravilhosas-routes.js](./src/routes/maravilhosas-routes.js)
* [app.js](./src/app.js)