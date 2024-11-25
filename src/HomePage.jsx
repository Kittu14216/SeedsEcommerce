import React from "react";
import HeaderCarousel from "./Components/HeaderCarousel/HeaderCarousel";

import Catogory from "./Components/Category/Catogory";

export default function HomePage() {
  return (
    <div>
      <HeaderCarousel />
      <Catogory />
      {/* <Products /> */}
    </div>
  );
}
