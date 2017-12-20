var React = require('react');
var axios = require('axios');

var UsuarioService = {
    
    getAllUsers: function() {
        return axios.get('http://localhost:8080/rest/usuarios');
    }
};

module.exports = UsuarioService;