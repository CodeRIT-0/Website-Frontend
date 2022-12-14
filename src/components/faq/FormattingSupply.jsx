import React, { useState } from "react";

const FormattingSupply = ({ i, q, a }) => {
  const [show, setShow] = useState(false);
// console.log(i);
  return (
    <>
      <div className="accordion-item">
        <div
          className="accordion-link"
          onClick={() => {
            setShow(!show);
          }}
        >
          {q}
          {!show && <i className="fa fa-plus"></i>}
          {show && <i className="fa fa-minus"></i>}
        </div>
        {show && (
          <div className="faq-answers">
            
            {
            i==1? 
            <p>
              Join us on our socials where we regularly post all the events and contest discussion <br/>
               Follow us on our socials <br/>
               Telegram : <a href="http://bit.ly/TelegramCodeRIT" target="_blank">http://bit.ly/TelegramCodeRIT </a>
               <br/>
               Discord : <a href=" https://discord.gg/yVrZCJcq" target="_blank">  https://discord.gg/yVrZCJcq</a> 
               <br />
               Instagram : <a href="https://www.instagram.com/code_rit/" target="_blank">https://www.instagram.com/code_rit/</a> 
               <br />LinkedIn : <a href="https://www.linkedin.com/company/coderitclub/" target="_blank"> https://www.linkedin.com/company/coderitclub/ </a> 
               </p>
            : 
            <p>{a}</p>

            }
            
          </div>
        )}
      </div>
    </>
  );
};

export default FormattingSupply;
