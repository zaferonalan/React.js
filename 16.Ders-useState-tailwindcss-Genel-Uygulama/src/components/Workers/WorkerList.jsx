/* eslint-disable react/prop-types */
import Card from "../UI/Card";

const WorkerList = ({ workers, setWorkers }) => {
  console.log(workers);

  if (workers.length < 1) {
    return;
  }

  const deleteworker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };

  return (
    <Card className="mt-10">
      <ul>
        <li className="flex justify-between py-2">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl py-2 transition-shadow"
            key={worker.id}
            onClick={() => deleteworker(worker.id)}
          >
            <span>{worker.name}</span>
            <span className="text-teal-700 font-medium">{worker.wage}₺</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
