import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Selects extends React.Component {
  state = {
    filme: "",
    labelWidth: 0,
    characterName: []
  };

  handleRequests = response => response.json();


  //Varios Fetchs, fazer só um fetch
  handleChange = event => {
    const { charactersUrl } = this.state;

    charactersUrl[event.target.value].map(item =>
      fetch(item)
        .then(this.handleRequests)
        .then(data =>
          this.setState({
            characterName: [
              ...this.state.characterName,
              data.name
            ]
          })
        )
    );
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () =>
    fetch("https://swapi.co/api/films/")
      .then(this.handleRequests)
      .then(data =>
        this.setState({
          titles: data.results.map(item => item.title),
          charactersUrl: data.results.map(item => item.characters)
        })
      );

  render() {
    const { classes } = this.props;
    const { titles, age } = this.state;
    return titles ? (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filme-native-simple">Filme</InputLabel>
          <Select
            native
            value={age}
            onChange={this.handleChange}
            inputProps={{ name: "filme", id: "filme-native-simple" }}
          >
            <option value="" />
            {titles.map((title, index) => (
              <option key={title} value={index}>
                {title}
              </option>
            ))}
          </Select>
        </FormControl>
        {console.log(this.state.characterName)}
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="personagem-native-simple">Personagem</InputLabel>
          <Select
            native
            value={this.state.age}
            inputProps={{ name: "personagem", id: "personagem-native-simple" }}
          >
            <option value="" />
            {titles.map(title => (
              <option key={title} value={title}>
                {title}
              </option>
            ))}
          </Select>
        </FormControl>
      </div>
    ) : (
      <div>
        <loading />
      </div>
    );
  }
}

Selects.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles()(Selects);
