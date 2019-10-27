module.exports = (app) => {
    const jurusan = require('./controller/jurusan');

    app.route('/').get((req, res) => {
        res.send('Hellooooo')
    })
    app.route('/get_jurusan').get(jurusan.get_jurusan);
}