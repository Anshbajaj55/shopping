class Product{
    products = []
    add = (req, res) =>{
        this.products.push({
            id : 'product-' + (new Date()).getTime(),
            ...req.body
        })
        res.send({
            bSuccess : true,
            message : 'Product added !'
        })
    }

    find = (req, res) => {
        res.send(this.products.find(product => product.id === req.params.id))
    }

    remove = (req, res) => {
        this.products = this.products.filter(product => product.id !== req.params.id)
        res.send({
            bSuccess : true,
            message : 'Product removed !'
        })
    }
    
    read = (req, res) => {
        res.send(this.products)
    }

    update = (req, res) => {
        const index = this.products.findIndex(product => product.id === req.params.id)
        this.products[index] = {
            id : req.params.id,
            ...req.body
        }
        res.send({
            bSuccess : true,
            message : 'Product updated !'
        })
    }
}

export default Product