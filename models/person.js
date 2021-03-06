/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

const url = process.env.MONGODB_URI
console.log('connecting to ', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result => {
		console.log('connected to the database')
	})
	.catch((error) => {
		console.log('error while connecting to MongoDB: ', error.message)
	})

const personSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		minlength: 3
	},
	number: {
		type: String,
		required: true,
		minlength: 8
	}
})

personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject._id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

personSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Person', personSchema)