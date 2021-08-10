import React from "react";
import { Layout } from "../layout/Layout";
import { Form } from "../form/Form";
import { IFormItem } from "../types";
import { Card } from "../card/Card";
import { Submitted } from "../submitted/Submitted";

import "./app.scss";

export const App: React.FC = () => {
  const [cards, setCards] = React.useState<IFormItem[]>([]);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSend = (item: IFormItem) => {
    setCards(cards.concat(item));
    setIsSubmitted(true);
    setInterval(() => setIsSubmitted(false), 3000);
  };

  return (
    <Layout>
      <Form onSend={onSend} />
      {cards.map((card, idx) => (
        <Card card={card} key={idx} />
      ))}
      {isSubmitted && <Submitted />}
    </Layout>
  );
};
