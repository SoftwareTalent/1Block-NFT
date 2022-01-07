import React from "react";
import { ReactSVG } from "react-svg";

import Accordion from "./Accordion";
import FaqSelect from "./FaqSelect";
import PartnerItem from "./PartnerItem";
import trailerBG from "../../../assets/images/updated-design/home-page/trailer-bg.svg";

function Faq() {
  const options = ["What are 1Blocks?", "What is 1Blocks?", "What is 1Blocks?"];

  return (
    <section id="faq">
      <div className="faq">
        <h1 className="faq__title">FAQs</h1>
        <Accordion />
        {/* 
        <button type="button" className="browse__all__faqs">
          Browse all FAQs
        </button> */}
      </div>

      <ReactSVG src={trailerBG} className="trailer-bg-pc" />
    </section>
  );
}

export default Faq;
