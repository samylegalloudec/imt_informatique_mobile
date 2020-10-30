import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Entete from "./src/Entete";
import Saisie from "./src/Saisie";
import BoutonCreer from "./src/BoutonCreer";
import ListeActions from "./src/action/ListeActions";
import Menu, { terminees, actives, toutes } from "./src/menu/Menu";

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {
  // état global de l'application
  // il y aura probalement d'autres informations à stocker
  state = {
    texteSaisie: "",
    actions: [],
    filterON: toutes,
  };

  constructor(props) {
    super(props);
    this.onSupprimerAction = this.supprimerAction.bind(this);
    this.onTerminerAction = this.terminerAction.bind(this);
    this.onFilterAction = this.filterActionState.bind(this);
  }

  /**
   * Méthode invoquée lorsque que la saisie change.
   *
   * @param nouvelleSaisie la valeur saisie
   */
  quandLaSaisieChange(nouvelleSaisie) {
    this.setState({ texteSaisie: nouvelleSaisie });
  }

  /**
   * Méthode invoquée lors du clic sur le bouton `Valider`.
   */
  validerNouvelleAction() {
    //On crée une nouvelle action non terminée, et on clear le state.
    this.state.actions.push({
      actionText: this.state.texteSaisie,
      estTermine: false,
    });
    this.setState({ texteSaisie: "" });

    let activeFilter = this.state.filterON;
    console.log("filter : ", activeFilter);
  }

  supprimerAction(index) {
    //On supprime l'élément à l'index sélectionné, et on clear le state.
    this.state.actions.splice(index, 1);
    this.setState({});
  }

  terminerAction(index) {
    //On passe l'état de l'action a terminé dans le state
    console.log("termine !");
    const actions = this.state.actions;
    actions[index].estTermine = !actions[index].estTermine;
    this.setState({});
  }

  filterAction() {
    if (this.state.filter == toutes) {
      return this.state.actions;
    } else if (this.state.filter == actives) {
      return this.state.actions.filter((action) => {
        action.estTermine == false;
      });
    } else if (this.state.filter == terminees) {
      return this.state.actions.filter((action) => {
        action.estTermine == true;
      });
    }
    return [];
  }

  filterActionState(selectedFilter) {
    let key = Object.keys(selectedFilter)[0];
    if (key == "toutes") {
      this.setState({ filter: toutes });
    } else if (key == "actives") {
      this.setState({ filter: actives });
    } else if (key == "terminees") {
      this.setState({ filter: terminees });
    }
  }

  render() {
    const { texteSaisie } = this.state;

    return (
      <View style={styles.conteneur}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Entete />
          <Saisie
            texteSaisie={texteSaisie}
            evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}
          />
          <ListeActions
            actions={this.filterAction()}
            onSupprimer={this.onSupprimerAction}
            onTerminer={this.onTerminerAction}
          />
          <BoutonCreer onValider={() => this.validerNouvelleAction()} />
        </ScrollView>
        <Menu onFilter={this.onFilterAction} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conteneur: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
