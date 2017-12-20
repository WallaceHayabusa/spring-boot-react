var React = require('react');
var axios = require('axios');

var UsuarioService = {
    
    getAllUsers: function() {
        return axios.get('http://localhost:8080/rest/usuarios');
    },

    save: function() {
        return axios.post('http://localhost:8080/rest/usuarios', {name: 'José', email: 'joseph@gmail.com'});
    }
};

module.exports = UsuarioService;