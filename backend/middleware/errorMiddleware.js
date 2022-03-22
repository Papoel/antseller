const notFound = (request, response, next) => {
    const error = new Error(`L'URL : ** ${request.originalUrl} ** est incorrect.`)
    response.status(404)
    next(error)
}

const errorHandler = (error, request, response, next) => {
    // console.log(request.originalUrl)
    const statusCode = response.statusCode === 200 ? 500 : response.statusCode
    response.status(statusCode)
    response.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? null : error.stack, 
    })
}

export { notFound, errorHandler }