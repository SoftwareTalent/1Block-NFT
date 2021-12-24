import React from "react";

import FaqSelect from "./FaqSelect";
import PartnerItem from "./PartnerItem";

function Faq() {
  const options = ["What is 1Blocks?", "What is 1Blocks?", "What is 1Blocks?"];

  return (
    <section id="faq">
      <div className="faq">
        <h1 className="faq__title">FAQs</h1>
        <FaqSelect options={options} />
        <FaqSelect options={options} />
        <FaqSelect options={options} />
        <button type="button" className="browse__all__faqs">
          Browse all FAQs
        </button>
      </div>

      {/* <div className="partners">
        <h1>PARTNERS</h1>
        <div className="partners__content">
          <PartnerItem />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem />
          <PartnerItem />
        </div>
      </div> */}
    </section>
  );
}

export default Faq;
