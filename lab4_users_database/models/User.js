import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 100
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    address: {
        street: { type: String, required: true },
        suite: { type: String, required: true },
        city: {
            type: String,
            required: true,
            match: /^[A-Za-z\s]+$/
        },
        zipcode: {
            type: String,
            required: true,
            match: /^\d{5}-\d{4}$/
        },
        geo: {
            lat: { type: String, required: true },
            lng: { type: String, required: true }
        }
    },

    phone: {
        type: String,
        required: true,
        match: /^\d-\d{3}-\d{3}-\d{4}$/
    },

    website: {
        type: String,
        required: true,
        match: /^https?:\/\/.+/
    },

    company: {
        name: { type: String, required: true },
        catchPhrase: { type: String, required: true },
        bs: { type: String, required: true }
    }

});

const User = mongoose.model('User', userSchema);

export default User;
