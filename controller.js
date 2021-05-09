'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan", res)
};

//menampilkan data
exports.tampilmhs = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error,rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok(rows, res)
        }
    });
};

//menampilkan data mahasiswa berdasarakan id
exports.tampilmhsid = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id],
        function(error,rows,fields){
            if(error){
                console.log(error);
            }
            else{
                response.ok(rows, res)
            }
        });
};

//menambahkan data mahasiswa
exports.tambahmhs = function(req,res){
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)', 
    [nim, nama, jurusan],
        function (error, rows, fields){
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Menambahkan Data",res)
            }
        });
};

//mengubah data berdasarkan id
exports.ubahmhs = function(req,res){
    var id = req.body.id_mahasiswa; 
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?,nama=?,jurusan=? WHERE id_mahasiswa=?', [nim,nama,jurusan,id], 
        function(error,rows,fields){
            if(error){
                console.log(error);
            }
            else{
                response.ok("Berhasil Mengubah Data",res)
            }
        });
};


//Menghapus data berdasarkan id
exports.hapusmhs = function(req,res){
    var id = req.body.id_mahasiswa;

    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
    function(error,rows,fields){
        if(error){
            console.log(error);
        }
        else{
            response.ok("Berhasil Menghapus Data",res)
        }
    });
};


//menampilkan matakuliah group
exports.tampilgroupmatkul = function(req,res){
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
        function (error,rows,fields){
            if(error){
                console.log(error);
            }else{
                response.oknested(rows, res);
            }
        });
};