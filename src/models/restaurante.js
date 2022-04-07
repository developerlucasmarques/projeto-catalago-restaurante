import Sequelize from 'sequelize';
import { connection } from '../database/connection.js';

export const produtos = connection.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    img: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    categoria: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ingredientes: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
},{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});


// const initTable = async () => {
//     await produtos.sync();
// };

// initTable();