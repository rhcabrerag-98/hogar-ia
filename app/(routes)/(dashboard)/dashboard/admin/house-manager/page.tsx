import { ButtonAddHouse } from "./components/ButtonAddHouse";

export default function HouseManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="2xl font-bold">Manage your houses</h2>
        <ButtonAddHouse />
      </div>
    </div>
  );
}
