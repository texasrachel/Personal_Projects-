import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {
  getAllItems,
  updateItem,
  createItem
} from '../../services/items'

import Items from "../../screens/Items/Items";
import ItemCreate from '../../screens/ItemCreate/ItemCreate';
import ItemDetail from '../../screens/ItemDetail/ItemDetail';
import ItemEdit from '../../screens/ItemEdit/ItemEdit';

function ItemContainer() {
  const [items, setItems] = useState([]);
  // const history = useHistory();

  useEffect(() => {
    const getItems = async () => {
      const itemList = await getAllItems();
      console.log(itemList);
      setItems(itemList);
    };
    getItems();
  }, []);

  const fetchItem = async (id, itemData) => {
    const updatedItem = await updateItem(id, itemData)
    setItems(prevState => prevState.map(item => {
      return item.id === Number(id) ? updatedItem : item
    })
    )
  }

  return (
    <Switch>
      <Route path="/items/new">
        <ItemCreate createItem={createItem} />
      </Route>
      <Route path="/items/:id/edit">
        <ItemEdit
          fetchItem={fetchItem}
          items={items}
        />
      </Route>
      <Route path="/items/:id">
        <ItemDetail items={items} />
      </Route>
      <Route path="/items">
        <Items items={items} />
      </Route>
    </Switch>
  );
}
export default ItemContainer;
