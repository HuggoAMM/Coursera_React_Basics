import React, { useState } from "react";
import PromoHeading from "./PromoHeading";

const [showMenu, setShowMenu] = useState(false);

const data = {
  heading: "99% off all items!",
  callToAction: "Everything must go!",
};

function Promo() {
  return (
    <div>
      <PromoHeading heading={data.heading} callToAction={data.callToAction} />
    </div>
  );
}

export default Promo;
