<h1 align="center"> Compra rapida </h1>

Componente que permite colocar en el carritoproducto colocando numero de sku y envia directo a la pagina de pago

![quick_view](https://user-images.githubusercontent.com/95322919/195920616-a0940c8e-1307-4d84-88a6-20ffd384d679.png)
____________
## :hammer:Configuración del proyecto

- :pushpin: `Paso 1 - Configuración Básica`: 
  Asegurarse que esta en el ambiente correcto de vtex

- :pushpin: `Paso 2 - Clonación del repositorio`: 
  Ingresar al repositorio estandar de vtex- react [<sub>https://github.com/vtex-apps/react-app-template</sub>] 
- :pushpin: `Paso 3 - Editar el Manifest.json`: 
  Se sugiere que se cambien los valores del vendor, versión y name si fuese necesario, los valores actuales son
  
  ```ruby
    "vendor": "itglobers",
    "name": "quick-order",
    "version": "0.0.1",
  ```
  Si desea cambiar estos valores se recomienda:
  
  :mag:"vendor": "nombre_del_la_tienda"<br>
  :mag:"version": "version_del_componente_actual"
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
