import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import List from "../List/List";
import "./Board.scss";
import { Divider } from "antd";

const Board = React.memo(({ listIds }) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="board" type="LIST" direction="horizontal">
          {({ innerRef, droppableProps, placeholder }) => (
            <div {...droppableProps} data-drag-scroller ref={innerRef}>
              <div className="board w-1/5 pl-3 pr-3 pt-3">
                <div className=" flex justify-between items-center ">
                  <div className="border-title">Tasks</div>
                  <img src="/svg/board-edit.svg" />
                </div>
                <Divider
                  style={{ backgroundColor: "#ffffff26", paddingLeft: "5px" }}
                />

                {listIds.map((item, index) => (
                  <List
                    id={item.id}
                    listData={item.listData}
                    key={index}
                  />
                ))}
                {placeholder}
              </div>

              {/* {listIds.map((listId, index) => (
                <List />
              ))} */}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});

Board.PropTypes = {
  listIds: PropTypes.array.isRequired,
};

export default Board;
