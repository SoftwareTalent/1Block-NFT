import React from "react";
import { ReactSVG } from "react-svg";

import BlockListBtnIcon from "../../../assets/images/block-list-btn-icon.svg";

function CollectionTree() {
  return (
    <div className="collection-body">
      <div className="collection-list">
        <div className="block-img">
          <button className="block-img-red">
            <ReactSVG src={BlockListBtnIcon} />
            0.15
          </button>
          <button className="block-img-blue">
            <ReactSVG src={BlockListBtnIcon} />
            0.15
          </button>
        </div>
        <p>#1</p>
        <p>Alien</p>
      </div>

      <div className="collection-list">
        <div className="block-img">
          <button className="block-img-red">
            <ReactSVG src={BlockListBtnIcon} />
            0.15
          </button>
          <button className="block-img-blue">
            <ReactSVG src={BlockListBtnIcon} />
            0.15
          </button>
        </div>
        <p>#3</p>
        <p>Human</p>
      </div>

      <div className="collection-list">
        <div className="block-img">
          <button className="block-img-red">
            <ReactSVG src={BlockListBtnIcon} />
            0.15
          </button>
          <button className="block-img-blue">
            <ReactSVG src={BlockListBtnIcon} />
            0.15
          </button>
        </div>
        <p>#4</p>
        <p>Human</p>
      </div>
    </div>
  );
}

export default CollectionTree;
