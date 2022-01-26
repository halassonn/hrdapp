import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
import { Mainwrapper } from "./Components";
import Axios from "../../config";
import Header from "./Header";

function Main(props) {
  const { children } = props;
  const { app } = useContext(GlobalContext);
  const [open, setopen] = useState(false);

  useEffect(() => {
    let source = Axios.CancelToken.source();

    const getParameter = async () => {
      try {
      } catch (error) {}
    };

    getParameter();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <Mainwrapper open={open}>
      <Header></Header>
      <main>{children}</main>
    </Mainwrapper>
  );
}
export default Main;
