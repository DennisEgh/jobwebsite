import React, { useEffect } from "react";
import Fifthcar from "../components/Fifthcar";
import Fourthcar from "../components/Fourthcar";
import Landing from "../components/landing";
import Secondcar from "../components/Secondcar";
import Sixthcar from "../components/Sixthcar";
import Thirdcar from "../components/Thirdcar";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Landing />
      <Secondcar />
      <Thirdcar />
      <Fourthcar />
      <Fifthcar />
      <Sixthcar />
    </>
  );
}
