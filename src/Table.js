import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, height, mass, hair_color, eye_color, birth_year, homeworld, species) {
    id += 1;
    return { id, name, height, mass, hair_color, eye_color, birth_year, homeworld, species };
}

const rows = [
  createData(
    "Luke Skywalker",
    172,
    77,
    "blonde",
    "blue",
    "19BBY",
    "https://swapi.co/api/planets/1/",
    "https://swapi.co/api/species/1/"
  )
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell numeric>Height</TableCell>
                        <TableCell numeric>Mass</TableCell>
                        <TableCell>Hair Color</TableCell>
                        <TableCell>Eye Color</TableCell>
                        <TableCell>Birth Year</TableCell>
                        <TableCell>Homeworld</TableCell>
                        <TableCell>Species</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell numeric>{row.height}</TableCell>
                                <TableCell numeric>{row.mass}</TableCell>
                                <TableCell numeric>{row.hair_color}</TableCell>
                                <TableCell numeric>{row.eye_color}</TableCell>
                                <TableCell numeric>{row.birth_year}</TableCell>
                                <TableCell numeric>{row.homeworld}</TableCell>
                                <TableCell numeric>{row.species}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
