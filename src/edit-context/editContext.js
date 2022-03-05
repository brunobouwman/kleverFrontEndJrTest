import { createContext, useState } from 'react';

const EditContext = createContext({
  toBeEdited: {},
  toggleState: (item) => {},
  editItem: (tokenId) => {},
});

export function EditContextProvider(props) {
  const [item, setItem] = useState([]);

  function editItemHandler(token) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === token) {
        const toBeEdited = localStorage.getItem(token);
        setItem(JSON.parse(toBeEdited));
        return;
      }
    }
  }

  function toggleStateHandler(token) {
    setItem(token);
  }

  const context = {
    toBeEdited: item,
    toggleState: toggleStateHandler,
    editItem: editItemHandler,
  };

  return (
    <EditContext.Provider value={context}>
      {props.children}
    </EditContext.Provider>
  );
}

export default EditContext;
