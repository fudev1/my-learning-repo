function authorize(request, response, next) {
    const { username } = request.query;
    if (username !== 'toto') {
        return response.send(`Tu n'es pas le bienvenue ici ${username}`);
    }
    next();
}

// query params = c'est une query key + valeur
// citation?username = toto
// un query params c'est ce qui se trouve à droite de ?
// username = key
// toto = valeur

exports.authorize = authorize;