var React = require('react');
var createReactClass = require('create-react-class');
var propTypes = require('prop-types');
var TabelaUsuarios = require('./TabelaUsuarios');

var UsuarioService = require('../services/UsuarioService');

var SearchUsuario = createReactClass({
    handleSubmit: function(e) {
        e.preventDefault();

        UsuarioService.getAllUsers().then(function(response) {
            console.log(response);
            this.props.updateUsuarios(response.data);
        }.bind(this));
    },

    render: function() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h2>Clique no botão abaixo:</h2>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </div>
                </form>
                <br/>
                <br/>
                
                <TabelaUsuarios usuarios={this.props.usuarios} />
            </div>
        );
    }
});

SearchUsuario.propTypes = {
    updateUsuarios: propTypes.func.isRequired,
    usuarios: propTypes.array
}

module.exports = SearchUsuario;