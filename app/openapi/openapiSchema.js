const schema = {
    "Music" : {
        "type": "object",
        "properties" : {
            "id" : {
                "type": "number"
            },
            "title" : {
                "type": "string"
            },
            "description" : {
                "type" : "string"
            },
            "album" : {
                "type": "string"
            },
            "artist" : {
                "type": "string"
            },
            "duration" : {
                "type": "string"
            },
            "date" : {
                "type": "string",
                "format" : "date-time"
            },
            "styles": {
                "types" : "array",
                "items" : {
                    "oneOf" : {
                        "type" : "string"
                    }
                }
            },
            "picture" : {
                "types" : "string"
            }
        }
    }
}

export {schema};
