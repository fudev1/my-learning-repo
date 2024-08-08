async function secretMiddleware(request, response, next) {
  const { user } = request.query;
  if (user !== "mdv") {
    return response.redirect("/forbidden");
  }
  next();
}

exports.secretMiddleware = secretMiddleware;
