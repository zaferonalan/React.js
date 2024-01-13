// type instructorProps = {
//   instructorNameLastname: {
//     firstName: string;
//     lastName: string;
//   };
// };

import { instructorProps } from "./propsTypescript";

function Instructor(props: instructorProps) {
  return (
    <div>
      <p>{props.instructorNameLastname.firstName}</p>
      <p>{props.instructorNameLastname.lastName}</p>
    </div>
  );
}

export default Instructor;
