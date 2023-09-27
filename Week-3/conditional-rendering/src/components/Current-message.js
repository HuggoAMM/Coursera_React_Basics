import Workdays from "./Workdays";
import Weekends from "./Weekends";

function CurrentMessage() {
  //   const day = new Date().getDay();
  const day = 0;

  return <>{day >= 1 && day <= 5 ? <Workdays /> : <Weekends />}</>;
}

export default CurrentMessage;
