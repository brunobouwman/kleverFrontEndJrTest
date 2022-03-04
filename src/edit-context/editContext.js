import { createContext, useState } from 'react';

const EditContext = createContext({
  toBeEdited: {},
  toggleState: (item) => {},
  editItem: (tokenId) => {},
  deleteItem: (tokenId) => {},
});

export function EditContextProvider(props) {
  const [item, setItem] = useState([]);

  function editItemHandler(token) {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(token)
      if (localStorage.key(i) === token) {
        const toBeEdited = localStorage.getItem(token);
        console.log(toBeEdited)
        setItem(JSON.parse(toBeEdited));
        console.log('settedItem', item);
        return;
      }
    }
  }

  function toggleStateHandler(token) {
      console.log('beforeSet->', token);
      setItem(token);
      console.log('settedItem', item);
  }

  function deleteItemHandler() {};

  const context = {
    toBeEdited: item,
    toggleState: toggleStateHandler,
    editItem: editItemHandler,
    deleteItem: deleteItemHandler
  };

  return (
    <EditContext.Provider value={context}>
      {props.children}
    </EditContext.Provider>
  );
}

export default EditContext;
