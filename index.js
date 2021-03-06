/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', (req, res) => {
	return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/', (req, res) => {
	res.send('<h1>Exercise 3.1-3.6')
})

app.get('/api/persons', (req, res, next) => {
	Person.find({})
		.then(p => {
			res.json(p)
		})
		.catch(error => next(error))
})

app.get('/api/persons/:id', (req, res, next) => {
	Person.findById(req.params.id)
		.then(p => {
			if(p) {
				res.json(p.toJSON())
			} else {
				res.status(404).end()
			}
		})
		.catch(error => next(error))
})

app.get('/info', (req, res) => {
	const date = new Date()

	Person.find({}).then(people => {
		res.send(`<p>Phonebook has info for ${people.length} people</p>
                <p>${date.toString()}</p>`)
	})
})

app.delete('/api/persons/:id', (req, res, next) => {
	Person.findByIdAndRemove(req.params.id)
		.then(result => {
			res.status(204).end()
		})
		.catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
	const body = req.body

	if(body.name === undefined || body.number === undefined) {
		return res.status(400).json({
			error: 'content missing'
		})
	}

	const person = new Person({
		name: body.name,
		number: body.number
	})

	person.save()
		.then(saved => {
			res.json(saved.toJSON())
		})
		.catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
	const body = req.body

	const person = {
		name: body.name,
		number: body.number
	}

	Person.findByIdAndUpdate(req.params.id, person, { new: true })
		.then(updatedPerson => {
			res.json(updatedPerson.toJSON())
		})
		.catch(error => next(error))
})

const unknownEndPoint = (req, res) => {
	res.status(404).send({ error: 'unknown endpoint' })
}

// handling request with unknown endpoint
app.use(unknownEndPoint)

const errorHandler = (error, req, res, next) => {
	console.log(error.message)

	if(error.name === 'CastError') {
		return res.status(400).send({ error: 'malformatted id ' })
	} else if(error.name === 'ValidationError') {
		return res.status(400).json({ error: error.message })
	}

	next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})