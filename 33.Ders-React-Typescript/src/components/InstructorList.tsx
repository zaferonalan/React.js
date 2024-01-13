type InstructorListType = {
  instructorNameLastnameList: {
    firstName: string;
    lastName: string;
  }[];
};

function InstructorList(props: InstructorListType) {
  return (
    <div>
      {props.instructorNameLastnameList.map((item) => {
        return (
          <h3 key={item.firstName}>
            {item.firstName} {item.lastName}
          </h3>
        );
      })}
    </div>
  );
}

export default InstructorList;
