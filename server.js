const express = require('express');
const app = express();
const port = 3000;
const {sequelize} = require('./db')
const userRouter = require('./routes/userRoute');
const showRouter = require('./routes/showRoute');

app.use('/users', userRouter)
app.use('/shows', showRouter)

app.listen(port, () => {
          // sequelize.sync({force: true})
          console.log(`Listening at http://localhost:${port}`)
})