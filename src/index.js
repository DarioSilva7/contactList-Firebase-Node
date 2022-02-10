const app = require('./app')
const morgan= require('morgan')
const PORT= 3000
require('./firebase')
app.use(morgan('dev'))

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

module.exports= app