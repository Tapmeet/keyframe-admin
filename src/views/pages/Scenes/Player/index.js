/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
import React from "react";
import PlayerSceneOne from "./Scene1";
import PlayerSceneTwo from "./Scene2";
import PlayerSceneThree from "./Scene3";
import PlayerSceneFour from "./Scene4";
import HOC from "./HOC";
import $ from "jquery";
const Player = (props) => {
  const [blocks, setBlocks] = React.useState(props.blocks);
  React.useEffect(() => {
    // var myInterval, myVar;
    // $(".player-new section:first-of-type").addClass("active");
    // clearTimeout(myVar);
    // var myFunc = function () {
    //   var cur = $(".player-new section.active");
    //   if (cur.index() == $(".player-new section").length - 1) {
    //     cur.removeClass("active");
    //     $(".player-new section:first-of-type").addClass("active");
    //     clearInterval(myInterval);
    //   } else {
    //     cur.removeClass("active").next().addClass("active");
    //   }
    // };
    // //Start Interval
    //  myVar = setTimeout(function () {
    //   myInterval = setInterval(myFunc, 4000);
    // }, 500);
    {
      // blocks.map((data, index) => {
        
      // });
    }
  }, []);
  var  timer = 0;
  return (
    <section className="template-new-wrapper-scene1 player-new ">
      {blocks.map((data, index) => {
        
        return (
          <HOC>
            {data.sceneId == 1 ? (
              <PlayerSceneOne data={data.sceneData} index={index} timer={timer} time={data.sceneData.time}  />
            ) : null}
            {data.sceneId == 2 ? (
              <PlayerSceneTwo data={data.sceneData} index={index} timer={timer} time={data.sceneData.time}  />
            ) : null}
            {data.sceneId == 3 ? (
              <PlayerSceneThree data={data.sceneData} index={index} timer={timer} time={data.sceneData.time} />
            ) : null}
            {data.sceneId == 4 ? (
              <PlayerSceneFour data={data.sceneData} index={index} timer={timer} time={data.sceneData.time}  />
            ) : null}
            <div className="d-none"> {timer = (parseFloat(timer)+ parseFloat(data.sceneData.time))}</div>
          </HOC>
          
        );
        
      })
      
      }
    </section>
  );
};
export default Player;
