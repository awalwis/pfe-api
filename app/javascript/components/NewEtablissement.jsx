import React from "react";
import { Link } from "react-router-dom";

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      login: "",
      motDePasse: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

   stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }


  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = "/api/v1/etablisements/create";
    const { nom, login, motDePasse } = this.state;

    if (nom.length == 0 || login.length == 0 || motDePasse.length == 0)
      return;

    const body = {
      nom,
      login,
      motDePasse,
    };


    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.props.history.push(`/recipe/${response.id}`))
      .catch(error => console.log(error.message));
  }


  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-5">
              Remplissez les champs pour vous inscrire en tant qu'établissement:
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="NomEtablisement">Nom de l'établissement</label>
                <input
                  type="text"
                  name="nom"
                  id="NomEtablissement"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="LoginEtablisement">Login</label>
                <input
                  type="text"
                  name="login"
                  id="LoginEtablisement"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
                
              </div>
              <label htmlFor="motDePasse">Mot de passe </label>
              <input
                  type="text"
                  name="motDePasse"
                  id="MotDePasseEtablisement"
                  className="form-control"
                  required
                  onChange={this.onChange}
                />
          
              <button type="submit" className="btn custom-button mt-3">
                S'inscrire
              </button>
              <Link to="/" className="btn btn-link mt-3">
                Retour à l'accueil
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;