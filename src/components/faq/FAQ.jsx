import React, { useState } from "react";
import "./faq.css";
import FormattingSupply from "./FormattingSupply";

const FAQ = () => {
  const ques = [
    {
      id: 1,
      q: "How can I join CodeRIT?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Numquam ab, dolores voluptate, cupiditate perferendis, neque delectus adipisci itaque enim optio qui libero maiores facilis accusamus. Ipsum, voluptates dignissimos accusantium perferendis officia autem dicta error pariatur molestiae eum enim magnam, magni consectetur maxime aliquam earum cumque officiis id vel qui laudantium!",
    },
    {
      id: 2,
      q: "How to become CodeRIT’s core member?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Numquam ab, dolores voluptate, cupiditate perferendis, neque delectus adipisci itaque enim optio qui libero maiores facilis accusamus. Ipsum, voluptates dignissimos accusantium perferendis officia autem dicta error pariatur molestiae eum enim magnam, magni consectetur maxime aliquam earum cumque officiis id vel qui laudantium!",
    },
    {
      id: 3,
      q: "How to get most out of CodeRIT?",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Numquam ab, dolores voluptate, cupiditate perferendis, neque delectus adipisci itaque enim optio qui libero maiores facilis accusamus. Ipsum, voluptates dignissimos accusantium perferendis officia autem dicta error pariatur molestiae eum enim magnam, magni consectetur maxime aliquam earum cumque officiis id vel qui laudantium!",
    },
  ];

  const [data] = useState(ques);

  const renderList = data.map((item) => {
    return <FormattingSupply key={item.id} q={item.q} a={item.a} />;
  });

  return (
    <div id="outer-faq-container">
      <h1>FAQs</h1>
      <div id="super-faq-container">
        <div className="faq-container">
          <div className="faq-accordion">{renderList}</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
