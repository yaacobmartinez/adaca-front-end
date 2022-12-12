import React, { useMemo, useReducer } from "react";
import "./CreateOrder.css";
import RadioInput from "../../components/RadioInput";
import { CreateOrderProps } from "./CreateOrder.props";

const CreateOrderView = (props: CreateOrderProps) => {
  const { items, rules } = props;

  type SelectedItems = Record<number, string>;
  const [selectedItems, updateSelectedItems] = useReducer(
    (state: SelectedItems, newState: SelectedItems) => {
      // TODO: Merge selectedItems state with newState -- OK
      return {...state, ...newState}
    },
    {
      0: "",
      1: "",
      2: "",
    } as SelectedItems
  );

  const isSelected = (id: string, groupIndex: number) => {
    return id === selectedItems[groupIndex];
  };

  const blacklist: number[] = useMemo(() => {
    // TODO: Create a blacklist based on rules and currently selected items
    let list: any = []
    for (const key in selectedItems) {
      const value = selectedItems[key];
      const group = items[key]?.filter(item => item.value === value)[0]
      const groupRules = rules[parseFloat(group?.id)]
      if (group && groupRules) {
        list = [...list, ...groupRules]
      }
  }
    return list;
  }, [rules, selectedItems, items]);

  const isDisabled = (id: string) => {
    return blacklist.includes(+id);
  };

  const handleSelection = (value: string, groupIndex: number) => {
    updateSelectedItems({
      [groupIndex]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(selectedItems);
  };

  // TODO: If no items are available, show a "Loading..." text --- OK
  if (items.length < 1) {
    return <div>Loading...</div>
  }
  return (
    <div className="createOrder">
      <form onSubmit={handleSubmit}>
        {items.map((group, groupIndex) => {
          return (
            <div key={groupIndex}>
              {group.map((item, index) => {
                // TODO: Should render RadioInput component -- OK
                return (
                  <div key={index}>
                      <RadioInput 
                        label={item.value} 
                        value={item.value} 
                        checked={isSelected(item.value, groupIndex)}
                        disabled={isDisabled(item.id)}
                        onSelect={() => handleSelection(item.value, groupIndex)} 
                      />
                  </div>
                )
              })}
              <br />
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateOrderView;
