import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

class Distributorpage extends Component {
    state = {
        request: [
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
            { station: 'Shoprite', code: 10009876, location: 'Ikeja', request: '200 Budweiser, 1000 trucks', status: 'Pending' },
        ]
    }
    render() {
        return (
            <div className="container">
                <Table singleLine id="table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Station Name</Table.HeaderCell>
                            <Table.HeaderCell>Station Code</Table.HeaderCell>
                            <Table.HeaderCell>Location</Table.HeaderCell>
                            <Table.HeaderCell>Requests</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.state.request.map(req => (
                            <Table.Row>
                                <Table.Cell>{req.station}</Table.Cell>
                                <Table.Cell>{req.code}</Table.Cell>
                                <Table.Cell>{req.location}</Table.Cell>
                                <Table.Cell>{req.request}</Table.Cell>
                                <Table.Cell><button id="button" type="submit">{req.status}</button></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        );
    }
}

export default Distributorpage;