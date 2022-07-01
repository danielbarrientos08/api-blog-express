import db from '../database/db.js'
import { DataTypes } from 'sequelize'

const BlogModel = db.define('blogs',{
    title: { type: DataTypes.STRING },    
    content: { type: DataTypes.STRING },    
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'created_at',
        type: DataTypes.DATE,
    },
})

export default BlogModel;