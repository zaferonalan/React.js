import { useParams } from "react-router-dom";

function MembersDetail() {
  //   const params = useParams();
  //   const memberId = params.memberId;
  const { memberId } = useParams();

  return (
    <div>
      <h1>MembersDetail {memberId}</h1>
    </div>
  );
}

export default MembersDetail;
