import React from 'react';

export default React.createContext({
    journalEntries: [],
    addEntry: () => {},
    deleteEntry: () => {},
    updateEntry: () => {}
});