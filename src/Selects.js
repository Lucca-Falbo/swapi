import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Selects extends React.Component {
  state = {
    filme: "",
    labelWidth: 0
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    const fetchData = () => fetch('https://swapi.co/api/films/1/')
    .then(response => response.json())
    .then(data => )

    function createOption(){

    }

    return <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filme-native-simple">Filme</InputLabel>
          <Select native value={this.state.age} onChange={this.handleChange("filme")} inputProps={{ name: "filme", id: "filme-native-simple" }}>
            <option value="" />
            <option>
              Star Wars
            </option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="personagem-native-simple">
            Personagem
          </InputLabel>
          <Select native value={this.state.age} onChange={this.handleChange("personagem")} inputProps={{ name: "personagem", id: "personagem-native-simple" }}>
            <option value="" />
            <option value={10}>Darth Vader</option>
          </Select>
        </FormControl>
      </div>;
  }
}

Selects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Selects);
