import React from 'react';

/*we use createContext when we want to pass data to child without
 implicity passing prop chains*/
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;