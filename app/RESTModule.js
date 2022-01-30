import {AbstractServerModule} from "../../tpnote-backend/AbstractServerModule.js";
import {User} from "../../tpnote-backend/metier/user.js";

class RESTModule extends AbstractServerModule{
    constructor(name, app, port) {
        super(name, app, port);
    }

    manageRoutes(){
        this.app.get("/users",(req,res) => {
            User.find({},(err, users) => {
                return res.send(JSON.parse(JSON.stringify(users)));
            });
        });

        this.app.get("/users/:name",(req,res) => {
            User.find({name: {$regex: req.params.name, $options: 'i'}},(err, users) => {
                return res.send(JSON.parse(JSON.stringify(users)));
            });
        });

        this.app.get("/countUsers",(req, res) => {
            User.countDocuments({}, (err, nbUsers) => {
                return res.send("" + nbUsers);
            });
        })
    }

}

export {RESTModule};
