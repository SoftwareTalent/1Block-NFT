import React from "react";
import { ReactSVG } from "react-svg";

import bigChat from "../../../assets/images/big-chat.svg";
import bigRedChat from "../../../assets/images/big-red-chat.svg";
import BlockListBtnIcon from "../../../assets/images/block-list-btn-icon.svg";
import tickBox from "../../../assets/images/tick-box.svg";

function DetailBlock() {
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
            <th style={{ marginLeft: "66px" }}>Parameters</th>
            <th className="align-right">
              <i className="glyphicon glyphicon-triangle-bottom"></i> Lowest
            </th>
            <th className="align-right">
              <i className="glyphicon glyphicon-triangle-bottom"></i> Latest
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="no-border">
            <td>
              <p>#1</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Alien</p>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <div className="desc-body" style={{ paddingLeft: "66px" }}>
                <div className="body">
                  <p>HAIR</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Wild
                  </p>

                  <p>NECKLACE</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Neck Tie
                  </p>

                  <p>EAR</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Gold Stud Left
                  </p>

                  <p>SHOES</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> High Tops
                  </p>
                </div>

                <div className="body">
                  <p>PANTS</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Athletic Shorts
                  </p>

                  <p>UNDER SHIRT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Cat Tee
                  </p>

                  <p>OVER SHIRT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Suit
                  </p>
                </div>

                <div className="body">
                  <p>GLASSES</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Nerdyglasses
                  </p>

                  <p>HAT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Spinner
                  </p>

                  <p>ONESIE</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Gold Stud Left
                  </p>
                </div>
              </div>
            </td>
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
            <td colspan="6">
              <div className="big-chat" style={{ width: "100%" }}>
                <ReactSVG src={bigChat} />
              </div>
            </td>
          </tr>

          <tr>
            <td>#2</td>
            <td>
              <div className="loading-list"></div>
            </td>
            <td>
              <div className="loading-list"></div>
            </td>
          </tr>

          <tr className="no-border">
            <td>
              <p>#1</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Alien</p>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <div className="desc-body" style={{ paddingLeft: "66px" }}>
                <div className="body">
                  <p>HAIR</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Wild
                  </p>

                  <p>NECKLACE</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Neck Tie
                  </p>

                  <p>EAR</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Gold Stud Left
                  </p>

                  <p>SHOES</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> High Tops
                  </p>
                </div>

                <div className="body">
                  <p>PANTS</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Athletic Shorts
                  </p>

                  <p>UNDER SHIRT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Cat Tee
                  </p>

                  <p>OVER SHIRT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Suit
                  </p>
                </div>

                <div className="body">
                  <p>GLASSES</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Nerdyglasses
                  </p>

                  <p>HAT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Spinner
                  </p>

                  <p>ONESIE</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Gold Stud Left
                  </p>
                </div>
              </div>
            </td>
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
            <td colspan="6">
              <div className="big-chat" style={{ width: "100%" }}>
                <ReactSVG src={bigChat} />
              </div>
            </td>
          </tr>

          <tr className="no-border">
            <td>
              <p>#1</p>
              <div className="table-img"></div>
            </td>
            <td>
              <p>Alien</p>
            </td>
            <td className="align-right">0x54a...873</td>
            <td>
              <div className="desc-body" style={{ paddingLeft: "66px" }}>
                <div className="body">
                  <p>HAIR</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Wild
                  </p>

                  <p>NECKLACE</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Neck Tie
                  </p>

                  <p>EAR</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Gold Stud Left
                  </p>

                  <p>SHOES</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> High Tops
                  </p>
                </div>

                <div className="body">
                  <p>PANTS</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Athletic Shorts
                  </p>

                  <p>UNDER SHIRT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Cat Tee
                  </p>

                  <p>OVER SHIRT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Suit
                  </p>
                </div>

                <div className="body">
                  <p>GLASSES</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Nerdyglasses
                  </p>

                  <p>HAT</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Spinner
                  </p>

                  <p>ONESIE</p>
                  <p className="flex">
                    <ReactSVG src={tickBox} /> Gold Stud Left
                  </p>
                </div>
              </div>
            </td>
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
            <td colspan="6">
              <div
                className="big-chat"
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(180deg, rgba(5, 5, 32, 0.4) 0%, rgba(170, 23, 23, 0.16) 100%)",
                }}
              >
                <ReactSVG src={bigRedChat} />
              </div>
            </td>
          </tr>

          {/**/}
        </tbody>
      </table>
    </div>
  );
}

export default DetailBlock;
