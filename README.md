# Juego Ping-Pong

Este juego esta compuesto por 4 clases:
- Juego
- Bola
- Pala
- Espacio (svg)

En este proyecto he intentado poner en practica la arquitectura MVC.

Para poder jugar se tiene primero que instanciar el juego en el main, donde el propio juego creará:
- El tablero SVG
- Las palas para jugar
- La bola
- La puntuacion
- El ganador

En el main también es necesario especificarle los eventos que tendrán el movimiento de las palas, con los metodos moverPala(), y clicarPala().
Este éltimo método ha sido para practicar con los eventos táctiles.

Enlace para jugar:
https://ainaravc4.github.io/Ping-Pong/
