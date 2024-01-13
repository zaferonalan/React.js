type instructorProps = {
  instructorNameLastname: {
    firstName: string;
    lastName: string;
  };
};

function Instructor(props: instructorProps) {
  return (
    <div>
      <p>{props.instructorNameLastname.firstName}</p>
      <p>{props.instructorNameLastname.lastName}</p>
    </div>
  );
}

export default Instructor;
