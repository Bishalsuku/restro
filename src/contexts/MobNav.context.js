import React, { createContext, useState } from "react";

export const MobNavContext = createContext();

const MobNavContextProvider = ({ children }) => {
  const [isMobNavOpen, setisMobNavOpen] = useState(false);

  const changeMobNavState = () => {
    return setisMobNavOpen(!isMobNavOpen);
  };

  return (
    <MobNavContext.Provider value={{ isMobNavOpen, changeMobNavState }}>
      {children}
    </MobNavContext.Provider>
  );
};

export default MobNavContextProvider;
