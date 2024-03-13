
import { useContext } from "react";
import Header from "../Navigation-routing/header";
import { userdetails } from "../Navigation-routing/Navigation";
import Usereducers from "../components/functionalComponents/hooks/usereducer/crud";
import Parent from "../components/functionalComponents/memo/parent";

const Setting = () => {
  const userInfo = useContext(userdetails);
  return (
    <>
      <Header />
      {/* <h1>setting</h1> */}
      <h2>Setting screen {userInfo.username}</h2>
      {/* <Usereducers/> */}
    {/* <Parent/> */}

    </>
  );
};

export default Setting;
