import 'package:flutter/cupertino.dart';
import 'package:convertisseur_devises/models/devise.dart';
import 'package:convertisseur_devises/styles.dart';
import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'dart:developer';
import 'package:convertisseur_devises/widgets/widget_saisie.dart';

class ConvertisseurDevisePage extends StatefulWidget {
  ConvertisseurDevisePage();
  @override
  State<StatefulWidget> createState() {
    return _ConvertisseurDevisePage();
  }
}

class _ConvertisseurDevisePage extends State<ConvertisseurDevisePage> {
  // les différents "états" de la page
  double _valeur; // valeur saisie
  Devise _deviseInitial; // devise initiale sélectionnée
  Devise _deviseFinale; // devise finale sélectionnée
  double _resultat; // le résultat de la conversion
  // définition des valeurs initiales
  @override
  void initState() {
    super.initState();
    _valeur = 0;
    _resultat = 0;
    _deviseInitial = Devise.EURO;
    _deviseFinale = Devise.DOLLAR;
  }

  calculerResultat() {
    this.setState(() {
      _resultat = _valeur / taux[_deviseInitial] * taux[_deviseFinale];
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: [
        Spacer(),
        Text(
          'Valeur',
          style: AppStyle.labelStyle,
        ),
        Spacer(),
        Saisie(onChange: (saisie) {
          var valeurSaisie = double.parse(saisie);
          setState(() {
            _valeur = valeurSaisie;
          });
        }),
        Spacer(),
        Text(
          'De',
          style: AppStyle.labelStyle,
        ),
        Spacer(),
        DropdownButton(
            isExpanded: true,
            onChanged: (newVal) {
              var valeurSaisie = newVal;
              setState(() {
                _deviseInitial = valeurSaisie;
              });
            },
            items: [
              for (var item in Devise.values)
                DropdownMenuItem<Devise>(
                    child: Text(item.libelle), value: item),
            ]),
        Spacer(),
        Text('Vers', style: AppStyle.labelStyle),
        Spacer(),
        DropdownButton(
            isExpanded: true,
            onChanged: (newVal) {
              var valeurSaisie = newVal;
              debugPrint('newVal $newVal');
              log('newVal $newVal');
              setState(() {
                _deviseFinale = valeurSaisie;
              });
            },
            items: [
              for (var item in Devise.values)
                DropdownMenuItem<Devise>(
                    child: Text(item.libelle), value: item),
            ]),
        Spacer(
          flex: 2,
        ),
        ElevatedButton(onPressed: calculerResultat, child: Text('Convertir')),
        Spacer(
          flex: 2,
        ),
        Text(_resultat.toString(), style: AppStyle.labelStyle),
        Spacer(),
      ],
    ));
  }
}
