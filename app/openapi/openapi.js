const swaggerDoc = {
    openapi: '3.0.1',
    info: {
        version: '0.0.1',
        title: 'Users',
        description: 'User management API',
        contact: {
            name: 'Marc Petitdemange',
            email: 'marc.petitdemange57@gmail.com'
        }
    },
    servers: [{
        'url' : 'http://localhost:4000/'
    }],
    "paths": {
        "/users": {
            "get": {
                "description": "Recupere la liste des utilisateurs",
                "responses": {
                    "200": {
                        "description": "OK"
                    }
                },
                "servers": [
                    {
                        "url": "http://localhost:4000"
                    }
                ]
            },
            "servers": [
                {
                    "url": "http://localhost:4000"
                }
            ]
        }
    },
    "components": {}
};

export {swaggerDoc}