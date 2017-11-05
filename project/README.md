
## Examen almundo 

la carpeta enviada cuenta con dos proyectos, el primero es la carpeta __proyect__ en el cual se encuentra el codigo de la API REST en nodejs, por otro lado se encuentra la carpeta __hotels-client__ en el cual se encuentra el codigo del cliente, realizado en Angular.

Antes de todo, para poder ejecutar los comandos necesarios para hacer funcionar los proyectos, se debe tener instalado el gestor de paquetes que viene con nodejs o cualquier otro como por ejemplo [yarn](https://yarnpkg.com/lang/en/docs/install/), 
de no tenerlo, se puede descargar a travez de la pagina: [nodejs](https://nodejs.org/en/).

para iniciar, se debe ejecutar el siguiente comando en la carpeta de cada proyecto.  

## Start
```bash
$ npm i ó yarn 
```

despues de haber instalado todas las dependencias, se ejecutara el siguiente comando en la carpeta __proyect__ para
confirmar que no se haya instalado algun paquete con vulnerabilidades.

```
$ nsp check --output summary
```

## En marcha

Ahora se debe ejecutar el siguiente comando en la carpeta de cada proyecto, __proyect__ y __hotels-client__.

```bash
$ npm start
```

despues de ejecutados estos comandos, y esperando que no se haya generado algun tipo de error, al abrir el navegador y entrar a *__localhost:4200__* deberia aparecer el proyecto funcionando.

## Produccion

entonces, asi como estan hasta el momento, son proyectos que se encuentran en un ambiente de desarrollo, 
para poder pasarlos a produccion se debe ejecutar los siguientes comandos: 

**cliente (hotels-client)**
```bash
$ npm run build
```
esto generara una carpeta en la raiz del proyecto llamada dist, la cual ya se podria alojar en cualquier servidor.

**servidor (proyect)**
```bash
$ npm run start:prod
```
esto generara una carpeta en la raiz del proyecto llamada dist, la cual ya se podria alojar en cualquier servidor que soporte nodejs.


## Fin

###Juan David Correa. 
