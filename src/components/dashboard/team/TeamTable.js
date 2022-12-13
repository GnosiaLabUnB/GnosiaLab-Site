import React from 'react';

import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class TeamTable extends React.Component {
    render() {
        return (
            <Container className='mt-2'>
                <Table striped hover className='table_striped_style'>
                    <thead>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <th>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Cargo</th>
                            <th style={{ textAlign: 'center' }}>Status</th>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>1</td>
                            <td>Heidi Peter</td>
                            <td>heidipeter@gmail.com</td>
                            <td>Admin</td>
                            <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                            <td></td>
                        </tr>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>2</td>
                            <td>Patrícia</td>
                            <td>patricia@gmail.com</td>
                            <td>Admin</td>
                            <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                            <td style={{ textAlign: 'center' }}><Button size="sm" variant="secondary">Remover</Button></td>
                        </tr>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>3</td>
                            <td>Laila S Espindola</td>
                            <td>lailaespindola@gmail.com</td>
                            <td>Admin</td>
                            <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                            <td style={{ textAlign: 'center' }}><Button size="sm" variant="secondary">Remover</Button></td>
                        </tr>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>4</td>
                            <td>Lorena</td>
                            <td>lorena@gmail.com</td>
                            <td>Colaboradora</td>
                            <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                            <td style={{ textAlign: 'center' }}><Button size="sm" variant="secondary">Remover</Button></td>
                        </tr>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>5</td>
                            <td>Lais</td>
                            <td>lais@gmail.com</td>
                            <td>Colaboradora</td>
                            <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                            <td style={{ textAlign: 'center' }}><Button size="sm" variant="secondary">Remover</Button></td>
                        </tr>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>6</td>
                            <td>Sophia Motta</td>
                            <td>sophiamotta@gmail.com</td>
                            <td>Colaboradora</td>
                            <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                            <td style={{ textAlign: 'center' }}><Button size="sm" variant="secondary">Remover</Button></td>
                        </tr>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>7</td>
                            <td>Tiago</td>
                            <td>tiago@gmail.com</td>
                            <td>Colaborador</td>
                            <td style={{ color: 'var(--bs-success)', textAlign: 'center' }}>Ativo</td>
                            <td style={{ textAlign: 'center' }}><Button size="sm" variant="secondary">Remover</Button></td>
                        </tr>
                        <tr style={{ borderStyle: 'hidden' }}>
                            <td>8</td>
                            <td>Renato A Nobre</td>
                            <td>rekanobre@gmail.com</td>
                            <td>Colaborador</td>
                            <td style={{ color: 'var(--bs-danger)', textAlign: 'center' }}>Pendente</td>
                            <td style={{ textAlign: 'center' }}><Button size="sm" variant="secondary">Remover</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default TeamTable;

