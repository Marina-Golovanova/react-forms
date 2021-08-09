import React from "react";
import { Layout } from "../layout/Layout";
import { Form } from "../form/Form";
import { IFormItem } from "../types";
import { Card } from "../card/Card";

import "./app.scss";

export const App: React.FC = () => {
  const [cards, setCards] = React.useState<IFormItem[]>([]);
  const onSend = (item: IFormItem) => {
    setCards(cards.concat(item));
  };
  return (
    <Layout>
      <Form onSend={onSend} />
      {cards.map((card, idx) => (
        <Card card={card} key={idx} />
      ))}
    </Layout>
  );
};
