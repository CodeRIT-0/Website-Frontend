import React, { useState } from "react";

const FormattingSupply = ({ q, a }) => {
  const [show, setShow] = useState(false);

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
            <p>{a}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FormattingSupply;
