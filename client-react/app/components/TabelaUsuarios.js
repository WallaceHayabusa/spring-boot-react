var React = require('react');
var createReactClass = require('create-react-class');
var propTypes = require('prop-types');

var TabelaUsuarios = createReactClass({
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

TabelaUsuarios.propTypes = {
    usuarios: propTypes.array
}

module.exports = TabelaUsuarios