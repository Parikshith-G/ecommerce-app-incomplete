import AdminLinksComponent from "../admin/adminlinks/adminlink";
import AdminChatRoomComponent from "../admin/adminlinks/adminchatroom";
import { Row, Col } from "react-bootstrap";
const AdminChatsPage = () => {
  return (
    <Row className="m-5">
      <Col md={2}>
        <AdminLinksComponent />
      </Col>
      <Col md={10}>
        <Row>
          <AdminChatRoomComponent />
        </Row>
      </Col>
    </Row>
  );
};

export default AdminChatsPage;

