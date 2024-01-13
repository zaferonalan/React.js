import React from "react";

type dataComing = {
  name: string;
};

function Home(props: dataComing) {
  return (
    <div>
      <h1>Merhaba {props.name}</h1>
    </div>
  );
}

export default Home;
