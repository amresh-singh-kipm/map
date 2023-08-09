import React, { useState } from "react";
import CountryDetail from "./CountryDetail";
import DisplayMap from "./DisplayMap";

function Index() {
  const [details, setDetails] = useState("");

  return (
    <React.Fragment>
      {details && <CountryDetail details={details} setDetails={setDetails} />}
      <DisplayMap details={details} setDetails={setDetails} />
    </React.Fragment>
  );
}

export default Index;
