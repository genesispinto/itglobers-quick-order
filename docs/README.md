<h1 align="center"> Compra rapida </h1>

Componente que permite colocar en el carritoproducto colocando numero de sku y envia directo a la pagina de pago

![quick_view](https://user-images.githubusercontent.com/95322919/195920616-a0940c8e-1307-4d84-88a6-20ffd384d679.png)
____________
## :hammer:Configuración del proyecto

- :pushpin: `Paso 1 - Configuración Básica`: 
  Asegurarse que esta en el ambiente correcto de vtex
- :pushpin: `Paso 2 - Clone estos archivos` con el link proporcionado en el repositorio 
- :pushpin: `Paso 3 - Instalacion de nodos de react`: 
  Ingresar a la carpeta de react ejecutando el comando en consola ```$ cd react```
  y dentro de esta instalar lo siguiente: <br>
  :pencil2:`1` Nodos de react ejecutando en consola el comando ```$ yarn``` <br>
  :pencil2:`2` Paquete `css-handles` para los estilos basicos ```$ @vtex/css-handles```
- :pushpin: `Paso 4 - Volver a carpeta principal del proyecto y linkear app a su Tienda`: 
  Ejecute comando en consola ```$ vtex link```
  ________

## :key:Dependencias
1. Store-theme

```ruby
  "dependencies": 
  {
    "itglobers.quick-order": "0.x"
  }
```

2. Store GraphQl

```ruby
  "dependencies": 
  {
    "vtex.checkout-graphql": "0.x",
    "vtex.search-graphql": "0.x"
  }
```
## :key:Manera de llamar al componente: 
Ejemplo:
```
"flex-layout.row#department-search":{
    "children":["quick-order"]
    }
```

## :black_nib:Autor

 [<sub>Génesis Pinto</sub>](https://github.com/genesispinto) 
