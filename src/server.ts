'use strict'

import app from './app'
import { Config } from './config/index'

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log(`Listing on port ${PORT}`))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

startServer()
