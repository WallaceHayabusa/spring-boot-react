var React = require('react');
var createReactClass = require('create-react-class');

var SearchUsuario = require('./SearchUsuario');
var TabelaUsuarios = require('./TabelaUsuarios');

var Usuario = createReactClass({

    getInitialState: function() {
        return {
            usuarios: []
        };
    },

    updateUsuarios: function(usuarios) {
        this.setState({usuarios: usuarios});
    },

    render: function() {
        return(
            <div className="container">
                <SearchUsuario updateUsuarios={this.updateUsuarios} usuarios={this.state.usuarios} />
            </div>
        );
    }
});

module.exports = Usuario;