import React from "react";
import { ReactSVG } from "react-svg";

import tableChat from "../../../assets/images/table-chat.svg";
import redTableChat from "../../../assets/images/table-red-chat.svg";
import BlockListBtnIcon from "../../../assets/images/block-list-btn-icon.svg";

function ListBlocks() {
  return (
    <div className="list-blocks">
      <table className="list-block-table">
        <thead>
          <tr>
            <th>
              <i className="glyphicon glyphicon-triangle-bottom"></i> Mint Order
            </th>
            <th>Type</th>
            <th className="align-right">Minted By</th>
            <th className="align-right">
              <i className="glyphicon glyphicon-triangle-bottom"></i> Lowest
            </th>
            <th className="align-right">
              <i className="glyphicon glyphicon-triangle-bottom"></i> Latest
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>#1</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Alien</p>
              <div className="table-gradient">
                <ReactSVG src={tableChat} />
              </div>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <button className="block-img-red">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
            <td>
              <button className="block-img-blue">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <p>#2</p>
              <div
                className="loading-list float-right"
                style={{ marginTop: "6px" }}
              ></div>
            </td>
            <td>
              <div className="loading-list float-left"></div>
            </td>
          </tr>

          <tr>
            <td>
              <p>#3</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Alien</p>
              <div className="table-gradient">
                <ReactSVG src={tableChat} />
              </div>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <button className="block-img-red">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
            <td>
              <button className="block-img-blue">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <p>#4</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Human</p>
              <div className="table-gradient-red">
                <ReactSVG src={redTableChat} />
              </div>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <button className="block-img-red">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
            <td>
              <button className="block-img-blue">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <p>#5</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Alien</p>
              <div className="table-gradient-red">
                <ReactSVG src={redTableChat} />
              </div>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <button className="block-img-red">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
            <td>
              <button className="block-img-blue">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <p>#6</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Alien</p>
              <div className="table-gradient">
                <ReactSVG src={tableChat} />
              </div>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <button className="block-img-red">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>

            <td>
              <button className="block-img-blue">
                <ReactSVG src={BlockListBtnIcon} />
                0.15
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p>#7</p>
              <div
                className="loading-list float-right"
                style={{ marginTop: "6px" }}
              ></div>
            </td>
            <td>
              <div className="loading-list float-left"></div>
            </td>
          </tr>

          <tr>
            <td>
              <p>#8</p>
              <div
                className="loading-list float-right"
                style={{ marginTop: "6px" }}
              ></div>
            </td>
            <td>
              <div className="loading-list float-left"></div>
            </td>
          </tr>

          <tr>
            <td>
              <p>#9</p>
              <div
                className="loading-list float-right"
                style={{ marginTop: "6px" }}
              ></div>
            </td>
            <td>
              <div className="loading-list float-left"></div>
            </td>
          </tr>

          <tr>
            <td>
              <p>#10</p>
              <div
                className="loading-list float-right"
                style={{ marginTop: "6px" }}
              ></div>
            </td>
            <td>
              <div className="loading-list float-left"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListBlocks;
