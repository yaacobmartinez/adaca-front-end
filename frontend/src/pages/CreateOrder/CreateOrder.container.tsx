import { useEffect, useState } from "react";
import { getMenuItems, GetMenuItemsResponse } from "../../services/menu";
import { Items, Rules } from "../../types/Menu";
import {
  CreateOrderPrivateProps,
  CreateOrderPublicProps,
} from "./CreateOrder.props";
import CreateOrderView from "./CreateOrder.view";

const CreateOrder = (props: CreateOrderPublicProps) => {
  
  const [items, setItems] = useState<Items>([])
  const [rules, setRules] = useState<Rules>({})
  useEffect(() => {
    // TODO: Fetch menu data
    const fetchData = async () => {
      const response = await getMenuItems() 
      setItems(response.items);
      setRules(response.rules);
    };

    fetchData();
  }, []);

  const generatedProps: CreateOrderPrivateProps = {
    items,
    rules
  };

  return <CreateOrderView {...generatedProps} />;
};

export default CreateOrder;
