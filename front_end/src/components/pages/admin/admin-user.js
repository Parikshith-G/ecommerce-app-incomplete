import UsersPageComponents from "./admin-components/user-componenets";
import axios from "axios";

const fetchUsers = async (abctrl) => {
    const {data} = await axios.get("/api/users", {
        signal: abctrl.signal,
    });
    return data
}

const deleteUser = async (userId) => {
    const { data } = await axios.delete(`/api/users/${userId}`);
    return data
}

const AdminUsersPage = () => {
  return <UsersPageComponents fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;

