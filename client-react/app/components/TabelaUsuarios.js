var React = require('react');
var createReactClass = require('create-react-class');
var propTypes = require('prop-types');

var TabelaUsuarios = createReactClass({
    render: function() {
        var usuarios = this.props.usuarios.map(function(usuario, key) {
            return(
                <div>
                    <div key={key}>
                        {usuario.name} 
                    </div>
                </div>
            ); 
        });

        return(
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>John</td>
                            <td>john@example.com</td>
                        </tr>
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