import React, { useEffect, useState } from "react";
import Branding from "../components/main/Branding";
import ShortForm from "../components/main/ShortForm";
import { MainContainer } from "../components/styled/mainStyles";

function MainSection() {
  return (
    <MainContainer>
      <ShortForm />
      <Branding />
    </MainContainer>
  );
}

export default MainSection;
