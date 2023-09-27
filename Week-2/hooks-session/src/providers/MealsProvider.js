import React from "react";

var MealsContext = React.createContext();
var todayMeals = ["Baked Beans", "Baked Sweet Potatote"];
var MealsProvider = ({ children }) => {
  var [meals, setMealsList] = React.useState(todayMeals);
  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export var useMealsListContext = () => React.useContext(MealsContext);

export default MealsProvider;
