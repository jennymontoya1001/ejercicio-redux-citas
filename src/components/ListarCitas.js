import React from 'react'

export const ListarCitas = () => {
    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Agenda</h2>
                <div className="lista-citas">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Fractura</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>Fecha</td>
                                <td>Hora</td>
                                <td>Sintomas</td>
                                <td><button className="btn btn-danger">
                                    Borrar &times;
                                </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}
