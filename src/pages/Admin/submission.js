import { Divider } from "antd";
import Board from "../../assets/components/Admin/Dashabord/Board/Board";
import { useEffect, useState } from "react";
import { getSubmissions } from "../../redux/actions/Submissions";

const Submission = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      let res = await getSubmissions();
      console.log(res.data);
      let data = [{
        id: "1",
        listData: { id: "2", CardIds: res.data },
      }];
      console.log(data);
      setList(data);
    };
    fetchSubmissions();
  }, []);

  return (
    <div>
      <Divider style={{ backgroundColor: "#ffffff26" }} />
      <Board listIds={list} />
    </div>
  );
};

export default Submission;
