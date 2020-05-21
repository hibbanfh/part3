const mongoose = require('mongoose')

if(process.argv.length < 3) {
    console.log('Provide the password as an argument!')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://hibbanfh:${password}@cluster0-fp7vo.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
})

if(process.argv.length === 3) {
    Person.find({}).then(res => {
        res.forEach(peeps => {
            console.log(`${peeps.name} ${peeps.number}`)
        })
        mongoose.connection.close()
        process.exit(1)
    })
}

person.save().then(result => {
    console.log(`added ${person.name} number ${person.number} to phonebook`)
    mongoose.connection.close()
})