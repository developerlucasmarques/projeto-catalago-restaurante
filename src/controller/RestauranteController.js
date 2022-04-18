import { produtos } from "../models/restaurante.js";

export const getIndex = async (req, res) => {
    try {
        const restaurante = await produtos.findAll();
        res.status(200).render('index.ejs', {
            restaurante
        });
    }

    catch(err) {
        res.status(500).send(err.message);
    }
};

export const getAdmin = async (req, res) => {
    try {
        const restaurante = await produtos.findAll();
        res.status(200).render('admin.ejs', {
            restaurante
        });
    }

    catch(err) {
        res.status(500).send(err.message);
    }
};

export const getAddProdutos = (req, res) => {
    res.status(200).render('add-produtos.ejs');
};

export const postAddProduto = async (req, res) =>  {
    try {
        const {nome, categoria, ingredientes, img, valor} = req.body;
        await produtos.create({
            nome, categoria, ingredientes, img, valor
        })
        res.status(200).redirect('/admin');
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}

export const getEditarProduto = async (req, res) => {
    try {
        const produto = await produtos.findByPk(req.params.id);
        res.status(200).render('editar-produto.ejs', {
            produto 
        });
    }

    catch(err) {
        res.status(500).send(err.message);
    }
};

export const postEditar = async (req,res) => {
    const {nome, categoria, ingredientes, img, valor} = req.body;
    try {
        await produtos.update({
            nome: nome, 
            categoria: categoria, 
            ingredientes: ingredientes, 
            img: img, 
            valor: valor
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).redirect('/admin');
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}

export const getDeletar = async (req, res) => {
    try {
        await produtos.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).redirect('/admin');
    }
    catch(err) {
        res.status(500).send(err.message)
    }
};

export const getDetalhes = async (req, res) => {
    try {
        const produto = await produtos.findByPk(req.params.id);
        res.status(200).render('detalhes.ejs', {
            produto
        });
    }
    catch(err) {
        res.status(500).send(err.message)
    }
}