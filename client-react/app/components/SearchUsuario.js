var React = require('react');
var createReactClass = require('create-react-class');
var propTypes = require('prop-types');

var UsuarioService = require('../services/UsuarioService');
var TabelaUsuarios = require('../components/TabelaUsuarios');

var SearchUsuario = createReactClass({
    handleSubmit: function(e) {
        e.preventDefault();

        UsuarioService.getAllUsers().then(function(response) {
            console.log(response);
            this.props.updateUsuarios(response.data);
        }.bind(this));
    },

    render: function() {
        var usuarios = this.props.usuarios.map(function(usuario, key) {
            return(
                <tr key={key}>
                    <td>{usuario.name}</td>
                    <td>{usuario.email}</td>
                </tr>
            ); 
        });
        
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

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {usuarios}
                    </tbody>
                </table>
            </div>
        );
    }
});

SearchUsuario.propTypes = {
    updateUsuarios: propTypes.func.isRequired,
    usuarios: propTypes.array
}

module.exports = SearchUsuario;