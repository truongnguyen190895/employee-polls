import { useAppSelector } from "@/store";
import "./leaderBoard.style.scss";

const LeaderBoard = () => {
  const { allUsers } = useAppSelector((state) => state.question);
  return (
    <div className="leader-board">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="user-info">
                  <img
                    src={user.avatarURL}
                    alt="avatar"
                    width="40px"
                    height="40px"
                  />
                  <div className="user-name">
                    <h4>{user.name}</h4>
                    <span>{user.id}</span>
                  </div>
                </div>
              </td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
