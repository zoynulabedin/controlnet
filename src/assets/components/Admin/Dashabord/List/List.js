import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Draggable, Droppable } from "react-beautiful-dnd";

import "./List.scss";
import { Divider } from "antd";
import CardModal from "../Card/CardModal";
const List = React.memo(({ id, listData }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const cardClick = (CardData) => {
    console.log("cardClicked!");
    setOpen(true);
    setModalData(CardData);
  };

  console.log(listData);
  const cardsNode = (
    <Droppable droppableId={`list:${id}`} type="CARD">
      {({ innerRef, droppableProps, placeholder }) => (
        <div {...droppableProps} ref={innerRef}>
          {listData["CardIds"].map((CardData, index) => (
            <Draggable draggableId={CardData.id} index={1}>
              {({ innerRef, draggableProps, dragHandleProps }) => (
                <div
                  {...draggableProps}
                  {...dragHandleProps}
                  ref={innerRef}
                  className="list pl-3 pr-3 pt-3 mt-3"
                  onClick={() => cardClick(CardData)}
                >
                  <div className=" flex justify-between items-center">
                    <div className="list-name">{CardData.project_name}</div>
                    <img
                      src={
                        CardData.view !== 0 ? "/avatar/4.png" : "/avatar/5.png"
                      }
                      width={"30px"}
                    />
                  </div>
                  <Divider style={{ backgroundColor: "#ffffff26" }} />
                  <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    <div className="list-property flex justify-between p-2">
                      <img src={"/submission/view.png"} />
                      <div className="list-proerty-count">{CardData.view}</div>
                    </div>
                    <div className="list-property flex justify-between p-2">
                      <img src={"/submission/comment.png"} />
                      <div className="list-proerty-count">
                        {CardData.comment}
                      </div>
                    </div>
                    <div className="list-property flex justify-between p-2">
                      <img src={"/submission/attach.png"} />
                      <div className="list-proerty-count">
                        {CardData.attach}
                      </div>
                    </div>
                    <div className="list-property flex justify-between p-2">
                      <img src={"/submission/view.png"} />
                      <div className="list-proerty-count">Tag</div>
                    </div>
                  </div>
                  <div className=" flex justify-between pt-3 pb-3 items-center">
                    <div>
                      <span className="list-submission-date-text">
                        Submission Date:
                      </span>
                      <span className="list-submission-date">
                        {" "}
                        {CardData.submission_date}
                      </span>
                    </div>
                    <div>
                      <img src="/submission/plus-circle.png" />
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <>
      <Draggable draggableId={`list:${id}`} index={2}>
        {({ innerRef, draggableProps, dragHandleProps }) => (
          <div
            {...draggableProps} // eslint-disable-line react/jsx-props-no-spreading
            data-drag-scroller
            ref={innerRef}
          >
            <div {...dragHandleProps}>{cardsNode}</div>
          </div>
        )}
      </Draggable>

      <CardModal open={open} setOpen={setOpen} data={modalData} />
    </>
  );
});

List.PropTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default List;
