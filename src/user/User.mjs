class User{
    users = [{
        id : 'user-132527289',
        name : 'Shubham Gupta',
        contact : '9782312993',
        password : 'shubham#123'
    }]
    add = (req, res) => {
        const user = this.users.find(user => user.contact === req.body.contact)
        if(user){
            res.status(409).send({
                bSucess : false,
                message : 'User already exists !'
            })
        }else{
            this.users.push({
                id : `user-${(new Date()).getTime()}`,
                ...req.body
            })
            res.status(201).send({
                bSucess : true,
                message : 'User successfully registered !'
            })
        }
        
    }

    login = (req, res) => {
        const user = this.users.find(user => user.contact === req.body.contact && user.password === req.body.password)
        if(user){
            res.status(200).send({
                id : user.id,
                name : user.name,
                contact : user.contact
            })
        }else{
            res.status(401).send({
                bSucess : false,
                message : 'User not found or wrong credentials !'
            })
        }
    }
}

export default User