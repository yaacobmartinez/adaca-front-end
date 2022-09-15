import { useEffect, useState } from "react";
import { getMenuItems, GetMenuItemsResponse } from "../../services/menu";
import {
  CreateOrderPrivateProps,
  CreateOrderPublicProps,
} from "./CreateOrder.props";
import CreateOrderView from "./CreateOrder.view";

const CreateOrder = (props: CreateOrderPublicProps) => {
  

  useEffect(() => {
    // TODO: Fetch menu data
    const fetchData = async () => {
      
    };

    fetchData();
  }, []);

  const generatedProps: CreateOrderPrivateProps = {
    items: [],
    rules: {},
  };

  return <CreateOrderView {...generatedProps} />;
};

export default CreateOrder;
