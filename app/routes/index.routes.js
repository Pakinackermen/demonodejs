module.exports =  (app) => {                            
    var index = require('../controllers/index.controller');
    app.get('/', index.runder);
}

// D: \nodeJS\basic\Project\testServer\app\controllers\index.controller.js