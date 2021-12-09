import React from "react";
import { ReactSVG } from "react-svg";

import viewList from "../../../assets/images/view-list.svg";
import viewGrid from "../../../assets/images/view-grid.svg";
import viewDetail from "../../../assets/images/view-detail.svg";
import BlockListBtnIcon from "../../../assets/images/block-list-btn-icon.svg";

function BlockLists() {
  return (
    <div className="block-lists">
      <div className="btn-group">
        <div className="tap-btn">
          <button className="tap-btn-list">All(12,345)</button>
          <button className="tap-btn-list">Minted(100)</button>
          <button className="tap-btn-list">Unclaimed(10,093)</button>
        </div>
        <div className="view-btn">
          <button className="view-btn-list">
            <ReactSVG src={viewGrid} />
            GRID
          </button>
          <button className="view-btn-list">
            <ReactSVG src={viewList} />
            LIST
          </button>
          <button className="view-btn-list">
            <ReactSVG src={viewDetail} />
            DETAIL
          </button>
          <select>
            <option>10</option>
          </select>
        </div>
      </div>

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
    </div>
  );
}

export default BlockLists;
