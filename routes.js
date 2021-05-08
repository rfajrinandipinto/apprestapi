'use strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilmhs);

    app.route('/tampil/:id')
        .get(jsonku.tampilmhsid);

    app.route('/tambah')
        .post(jsonku.tambahmhs);

    app.route('/ubah')
        .put(jsonku.ubahmhs);

    app.route('/hapus')
        .delete(jsonku.hapusmhs);
}