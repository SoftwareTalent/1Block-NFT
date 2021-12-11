import React from "react";
import { ReactSVG } from "react-svg";
import classnames from "classnames";
import { Route } from "react-router";

import GridBlocks from "./GridBlocks";
import ListBlocks from "./ListBlocks";

import viewList from "../../../assets/images/view-list.svg";
import viewGrid from "../../../assets/images/view-grid.svg";
import viewDetail from "../../../assets/images/view-detail.svg";
import pagePrevIcon from "../../../assets/images/page-prev.svg";
import pageNextIcon from "../../../assets/images/page-next.svg";
import DetailBlock from "./DetailBlock";

function BlockLists() {
  const [viewOption, setViewOption] = React.useState("grid");
  return (
    <div className="block-lists">
      <div className="btn-group">
        <div className="tap-btn">
          <button className="tap-btn-list">All(12,345)</button>
          <button className="tap-btn-list">Minted(100)</button>
          <button className="tap-btn-list">Unclaimed(10,093)</button>
        </div>
        <div className="view-btn">
          <button
            className={classnames("view-btn-list", {
              active: viewOption == "grid",
            })}
            onClick={() => setViewOption("grid")}
          >
            <ReactSVG src={viewGrid} /> GRID
          </button>
          <button
            className={classnames("view-btn-list", {
              active: viewOption == "list",
            })}
            onClick={() => setViewOption("list")}
          >
            <ReactSVG src={viewList} /> LIST
          </button>
          <button
            className={classnames("view-btn-list", {
              active: viewOption == "detail",
            })}
            onClick={() => setViewOption("detail")}
          >
            <ReactSVG src={viewDetail} /> DETAIL
          </button>
          <select>
            <option>10</option>
          </select>
        </div>
      </div>
      {viewOption == "detail" ? (
        <DetailBlock />
      ) : viewOption == "grid" ? (
        <GridBlocks />
      ) : (
        <ListBlocks />
      )}

      <div className="page-btn-group">
        <button className="prev">
          <ReactSVG style={{ marginRight: "12.75px" }} src={pagePrevIcon} />{" "}
          Previous
        </button>
        <div className="num-btn-group">
          <button className="num-btn">1</button>
          <button className="num-btn">2</button>
          <button className="num-btn">3</button>
          <button className="num-btn hide-when-small">4</button>
          <button className="num-btn hide-when-small">5</button>
          <button className="num-btn hide-when-small">6</button>
          <button className="num-btn hide-when-small">7</button>
          <button className="num-btn hide-when-small">8</button>
          <button className="num-btn hide-when-small">9</button>
          <button className="num-btn hide-when-small">10</button>
          ...
          <button className="num-btn">251</button>
        </div>
        <button className="prev">
          Next{" "}
          <ReactSVG style={{ paddingLeft: "12.75px" }} src={pageNextIcon} />
        </button>
      </div>
    </div>
  );
}

export default BlockLists;
