import React, { useEffect, useRef, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Popover, Space, Tag, theme, Tooltip } from "antd";
import MenuContent from "../Menu/MenuContent";
import TextArea from "../TextArea/TextArea";

const ModelTag = ({ tags, setTags }) => {
  const [text, setText] = useState("");

  const { token } = theme.useToken();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");

  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };
  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };
  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue("");
  };

  const settingChange = (name, value) => {
    setText(value);
  };

  const add_keyword_list = () => {
    let new_list = text.split('\n');
    setTags([...tags, ...new_list]);
  }

  const tagInputStyle = {
    width: 64,
    height: 22,
    marginInlineEnd: 8,
    verticalAlign: "top",
  };
  const tagPlusStyle = {
    height: 22,
    background: token.colorBgContainer,
    borderStyle: "dashed",
  };

  const content = (
    <div className=" w-[350px]">
      <TextArea
        title={"Content Generated From AI"}
        value={text}
        // defaultValue={allData.needed_data.text}
        placeholder={"List your keyword here..."}
        name={"text"}
        change={(name, value) => settingChange(name, value)}
        type={"text"}
      />
      <button
        className=" bg-gray-500 p-2 rounded-lg"
        onClick={() => add_keyword_list()}
      >
        Add Keyword List
      </button>
    </div>
  );

  return (
    <div className="flex">
      <Space size={[0, 8]} wrap>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={editInputRef}
                key={tag}
                size="small"
                style={tagInputStyle}
                value={editInputValue}
                onChange={handleEditInputChange}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              key={tag}
              closable={index !== 0}
              style={{
                userSelect: "none",
                backgroundColor: "grey",
              }}
              onClose={() => handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible ? (
          <Input
            ref={inputRef}
            type="text"
            size="small"
            style={tagInputStyle}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        ) : (
          <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
            New Tag
          </Tag>
        )}
      </Space>
      <div>
        <Popover
          placement="bottomRight"
          content={content}
          colorBgElevated={"#ffffff"}
          overlayClassName="black-background-popover"
        >
          <button className=" bg-red-500 p-2 rounded-lg">
            Add Bulk Keywords
          </button>
        </Popover>
      </div>
    </div>
  );
};

export default ModelTag;
