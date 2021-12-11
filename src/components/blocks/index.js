import React from "react";
import classnames from "classnames";

import Collection from "./collections";
import CollectionTree from "./collections/CollectionTree";
import Settings from "./settings";

function Blocks() {
  const [activeTap, setActiveTap] = React.useState("collection");

  return (
    <>
      <div className="blocks">
        <div className="blocks-btn-group">
          <button
            className={classnames("blocks-btn", {
              active: activeTap == "collection",
            })}
            onClick={() => setActiveTap("collection")}
          >
            Collection (0)
          </button>
          <button
            className={classnames("blocks-btn", {
              active: activeTap == "settings",
            })}
            onClick={() => setActiveTap("settings")}
          >
            Settings
          </button>
        </div>

        {activeTap == "collection" ? (
          <>
            <Collection />
            <CollectionTree />
          </>
        ) : (
          <Settings />
        )}
        {/* <Collection />
      <CollectionTree /> */}
      </div>
      {activeTap == "settings" ? (
        <div className="buy-footer" style={{ bottom: "0" }}>
          <button className="save-btn">Changes Saved</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Blocks;
