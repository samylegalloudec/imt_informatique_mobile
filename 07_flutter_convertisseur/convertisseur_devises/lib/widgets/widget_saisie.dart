import 'package:flutter/cupertino.dart';
import 'package:flutter/rendering.dart';
import "package:flutter/material.dart";
import '../styles.dart';

class Saisie extends StatefulWidget {
  Function(String) onChange;
  @override
  _Saisie createState() => _Saisie();

  Saisie({this.onChange});
}

class _Saisie extends State<Saisie> {
  @override
  Widget build(BuildContext context) {
    return TextField(
      style: AppStyle.inputStyle,
      onChanged: widget.onChange,
    );
  }
}
