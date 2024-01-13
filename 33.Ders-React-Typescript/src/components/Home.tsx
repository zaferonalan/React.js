type dataComing = {
  name: string;
  courseNumber: number;
  isBest: boolean;
};

function Home(props: dataComing) {
  return (
    <div>
      <h1>Merhaba {props.name}</h1>
      <h2>Kurs sayısı: {props.courseNumber}</h2>
      {props.isBest ? (
        <p>En iyi React Kursu</p>
      ) : (
        <p>En iyi React kursu bu değil</p>
      )}
    </div>
  );
}

export default Home;
