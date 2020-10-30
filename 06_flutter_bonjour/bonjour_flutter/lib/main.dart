import 'package:flutter/material.dart';

void main() => runApp(MonApplication());

class MonApplication extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    const myColor = const Color(0xFFb74093);
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: Text('Bonjour App'),
        backgroundColor: myColor,
      ),
      body: Center(
          child: Column(
        children: [
          Text(
            'Bonjour',
            style: TextStyle(
                fontSize: 40,
                color: Color(0xFFb74093),
                fontWeight: FontWeight.bold),
          ),
          Text('Je suis Samy',
              style: TextStyle(
                fontSize: 40,
                color: Color(0xFFb74093),
              )),
          Image(
              image: NetworkImage(
                  'https://www.sciencesetavenir.fr/assets/img/2019/08/27/cover-r4x3w1000-5d64fde6d1355-sipa-00864680-000003.jpg')),
          ElevatedButton(
            onPressed: () => true,
            child: Text("Me contacter"),
            style: ButtonStyle(
                backgroundColor:
                    MaterialStateProperty.all<Color>(new Color(0xFFb74093))),
          )
        ],
      )),
    ));
  }
}
