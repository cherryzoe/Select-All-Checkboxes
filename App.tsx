import * as React from 'react';
import { Checkbox } from './Components/Checkbox';
import './style.css';
import { list } from './list';
import { useState } from 'react';

export default function App() {
  const [listItems, setListItems] = useState(
    list.map((el) => ({ ...el, isChecked: false }))
  );

  const isSelectAll =
    listItems.filter((el) => el.isChecked === false).length > 0 ? false : true;

  const handleSelectAll = (checked) => {
    let temp = listItems.map((el) => {
      return {
        ...el,
        isChecked: checked,
      };
    });
    setListItems(temp);
  };

  const handleChecked = (item, checkedVal) => {
    let temp = listItems.map((el) =>
      el.id === item.id ? { ...el, isChecked: checkedVal } : el
    );
    setListItems(temp);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-purple-700 to-blue-700 items-center justify-center flex flex-col">
      <Checkbox
        className="px-4 py-4 bg-gray-200"
        label="select all"
        checked={isSelectAll}
        onChange={(checked) => handleSelectAll(checked)}
      />
      <form>
        {listItems.map((item) => (
          <Checkbox
            label={item.name}
            className="mb-2"
            key={item.id}
            checked={item.isChecked}
            onChange={(checkedVal) => handleChecked(item, checkedVal)}
          />
        ))}
      </form>
    </div>
  );
}
