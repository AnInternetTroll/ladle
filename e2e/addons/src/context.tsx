// @ts-ignore
import { useLadleContext } from "@lucamatei/ladle--react";

function Context() {
  const { globalState } = useLadleContext();
  return <div id="context-div">{JSON.stringify(globalState)}</div>;
}

export default Context;
