# Coursera_React_Basics

### State: El estado es simplemente todos los valores de las variables con las que funciona su aplicación en algun momento dado.

### Arquitectura basada en componentes: Es una filosofia de diseño para desarrollar software basado en componentes de código reutilizable.

Cada componente consta de una funcionalidad bien definida que se puede insertar en una aicacion sin necesidad de modificar otros componentes.

##Tipos de Componentes
###Componentes Funcionales
###Componentes de Clase

El componenete rais [App.js] contiene otros componentes que los desarrolladores crean para representar las diversas partes de la interfaz de usuario de la aplicación.

Transpiling[Transpilar]: Proceso de conversión JSX a HTML.

Ventaja de la arquitectura por componentes es que su aplicación esta dividida en componentes autónomos individuales.

Existen 2 tipos de exportanciones:

- Exportación por defecto: Se utiliza cuando el nombre de la función es el mismo que el nombre del archivo y
- Exportación por nombre: Se utiliza cuando se quiere que el nombre de la funcionsea diferente al nombre del archivo.

Componente: pequeña pieza de funcionalidad.
Modulo: Serie de componentes

Props [Accesorios u Objeto de propiedades]: Permiten pasar datos de un comonente a otro
Funciones Puras: funcion que siempre devuelve los mismos resultados para los mismos valores de argumento que se traspasan

Enlaces: resuelven el problema de reutilización innecesaria de codigo entre componentes.
Hooks: Permite conectarse al estado de React y a las caracteristicas de estilo de vida de los componentes

Usar componentes sin estado [Stateless]: cuando su componente no necesita mantener su estado propio para poder funcionar
Usar componentes con estado [Stateful]: cuando su componente necesita mantener su propio estatdo para poder funcionar
