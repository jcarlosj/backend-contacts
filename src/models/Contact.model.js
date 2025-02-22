const { Schema, model } = require( 'mongoose' );


const UserSchema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    },
    {   
        timestamps: true
    });

const UserModel = model( 'User', UserSchema );


module.exports = UserModel;