import Headtop from "@/components/head/Headtop";
import Mediapartners from "@/components/sponsor-p/mediapartners/Mediapartners";
import Oursponsor from "@/components/sponsor-p/oursponsor/Oursponsor";
import Oursponsor2 from "@/components/sponsor-p/seriessponsor/Oursponsor";
import Whoshould from "@/components/sponsor-p/whoshould/Whoshould";
import React from "react";

function Sponsors() {
  return (
    <div>
      <Headtop head="Sponsors" />

      {/* <Oursponsor /> */}
      <Mediapartners />
      <Oursponsor2 />

      <Whoshould />
    </div>
  );
}

export default Sponsors;
