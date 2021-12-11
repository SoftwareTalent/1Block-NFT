import React from "react";
import { ReactSVG } from "react-svg";

import BlockListBtnIcon from "../../../assets/images/block-list-btn-icon.svg";

function GridBlocks() {
  return (
    <div className="blocks">
      <div className="block-list">
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

      <div className="block-list">
        <div className="block-img"></div>
        <p>#2</p>
        <div className="block-list-dash"></div>
      </div>

      <div className="block-list">
        <div className="block-img"></div>
        <p>#3</p>
        <p>Human</p>
      </div>

      <div className="block-list">
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

      <div className="block-list">
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
        <p>#5</p>
        <p>Alien</p>
      </div>

      <div className="block-list">
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

      <div className="block-list">
        <div className="block-img"></div>
        <p>#2</p>
        <div className="block-list-dash"></div>
      </div>

      <div className="block-list">
        <div className="block-img"></div>
        <p>#3</p>
        <p>Human</p>
      </div>

      <div className="block-list">
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

      <div className="block-list">
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
        <p>#5</p>
        <p>Alien</p>
      </div>
    </div>
  );
}

export default GridBlocks;
