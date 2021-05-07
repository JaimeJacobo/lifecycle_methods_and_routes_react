import React from "react";
import "./App.css";

import axios from "axios";

import { Link, Switch, Route, Redirect } from "react-router-dom";

import About from "./About";
import Contacts from "./Contacts";

class App extends React.Component {
  state = {
    counter: 0,
    characters: [],
    // user: {
    //   username: 'jaime',
    //   _id: 'nsd7wk9200403f9872t29440'
    // }
  };

  //Ejecutará el código que tiene dentro solamente después del primer renderizado del componente

  //Todas las llamadas a las APIs se hacen dentro del component did mount
  componentDidMount() {
    console.log("COMPONENT DID MOUNT");
    axios
      .get("https://breakingbadapi.com/api/characters")
      .then((result) => {
        this.setState({ ...this.state, characters: [...result.data] });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //Se activa cada vez que detecta un cambio en mi componente
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log("COMPONENT DID UPDATE");
  }

  //Se activa cuando un componente se desmonta (En App no tiene sentido utilizarlo ya que el componente App nunca se desmonta de nuestra aplicación)
  componentWillUnmount() {}

  render() {
    console.log("RENDER");
    return (
      <div className="App">
        <Link to={`/about/profile`}>About</Link>
        <Link to="/contacts">Contacts</Link>

        <Switch>
          <Route
            path="/contacts"
            component={() =>
              this.state.user ? <Contacts /> : <Redirect to="/" />
            }
          />
          <Route path="/about/profile" component={() => <About _id={this.state.user._id}/>} />
        </Switch>

        {/* <h1>Characters</h1>
        {
          this.state.characters.length === 0 
          ? <p>Loading...</p>
          : this.state.characters.map((character) => character.name)
        }

        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          SUM
        </button> */}
        {/* { this.state.counter === 0 ? <About /> : <Contacts />} */}
      </div>
    );
  }
}

export default App;

//Los 4 componentes que vamos a importar de react-router-dom son:

//Router: Es el componente necesario para indicarle a React que toda nuestra aplicación va a tenr acceso a las rutas. Tenemos que importarlo en index.js y envolver App en este componente.

//Link: Es el equivalente al a-tag de html (En React nunca utilizaremos el típico anchor tag de html, puesto que esto haría que se recargue la página)

//Route: Las rutas donde vamos a indicarle a React qué componente queremos renderizar cuando visitemos qué url

//Switch: Todas nuestras rutas (Routes) tienen que estar envueltas en el componente Switch para que, cuando cambie de url, solo me renderice un componente. Si no tuviese el Switch, puede haber casos en el que más de un componente sea renderizado.

//Redirect: Es un componente especial, que en vez de renderizar algo lo que hace es redireccionarte a otro url
