class Controller {

    constructor(service) {
        this.service = service;
        this.getAll = this.getAll.bind(this);
        this.get = this.get.bind(this);
        this.insert = this.insert.bind(this);

        this.insertMany = this.insertMany.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async getAll(req, res) {
        return res.status(200).send(await this.service.getAll(req.query || {}));
    }

    async insert(req, res) {
        console.log("Insert: ", req.body);
        let response = await this.service.insert(req.body);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(201).send(response);
    }

    async insertMany(req, res) {
        console.log("Insert Many: ", req.body);
        let response = await this.service.insertMany(req.body);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(201).send(response);
    }

    async update(req, res) {
        const {id} = req.params;
        let response = await this.service.update(id, req.body);

        return res.status(response.statusCode).send(response);
    }

    async delete(req, res) {
        const {id} = req.params;

        let response = await this.service.delete(id);

        return res.status(response.statusCode).send(response);
    }

    async get(req, res) {
        const {id} = req.params;

        let response = await this.service.get(id);

        return res.status(response.statusCode).send(response);
    }



}

export default Controller;
