import React, { useState } from "react";
import "./faq.css";
import FormattingSupply from "./FormattingSupply";

const FAQ = () => {
  const ques = [
    {
      id: 1,
      q: "How can I join CodeRIT?",
      a: "Join us on our socials where we regularly post all the events and contest discussion <li> Follow us on our socials <br>Telegram : http://bit.ly/TelegramCodeRIT<br>Discord : https://discord.gg/yVrZCJcq<br>Instagram : https://www.instagram.com/code_rit/<br>LinkedIn : https://www.linkedin.com/company/coderitclub/",
    },
    {
      id: 2,
      q: "How to become CodeRIT’s core member?",
      a: "We believe in democracy and diversity  and albeit recruit every year from  3rd year all branches.First round is resume shortlisting. The second one is group discussion.Last round is one on one interview which is not rigid. It will be a formal discussion .Please note that we don’t judge on the basis of achievements of the past but what you will present  can bring to the club is what matters.",
    },
    {
      id: 3,
      q: "How to get most out of CodeRIT?",
      a: "We host contest and workshop regularly. Participate in the contest we give prizes too. Our club consist of amazing talented group of people whom you can reach out anytime for any help.",
    },
  ];

  const [data] = useState(ques);

  const renderList = data.map((item) => {
    return <FormattingSupply key={item.id} i={item.id} q={item.q} a={item.a.split("<li>")} />;
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
