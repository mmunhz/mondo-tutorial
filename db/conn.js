const mongoose = require('mongoose')

async function main() {
   await mongoose.connect('mongodb://localhost:27017/testemongodb2')
   console.log('Conectado ao MongoDB com Mongoose!')
}

main().catch((error) => console.log(error))

module.exports = mongoose