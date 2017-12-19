var React = require('react');
var createReactClass = require('create-react-class');
var UsuarioService = require('../services/UsuarioService');
var Usuario = createReactClass({

    getInitialState: function() {
        return {
            usuario: null
        };
    },

    handleSubmit(e) {
        e.preventDefault();

        UsuarioService.getAllUsers().then(function(response) {
            console.log(response);
        });
    },

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <h2>Clique no botão abaixo:</h2>
                    <button className="btn btn-primary">Buscar</button>
                </div>
            </form>
        );
    }
});

module.exports = Usuario;