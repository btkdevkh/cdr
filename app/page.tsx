import Image from "next/image";
import data from "@/data/data.json";

export default function Home() {
  console.log(data);

  return (
    <div>
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Stop Logo" width={70} height={37} />
        <h1 className="text-3xl font-bold">CDR Essentielle</h1>
      </div>
      <br />
      <hr />

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">Données de l'API du CDR</h2>
        <div>
          {data.data.map((item, index) => (
            <div key={index} className="border p-4 mb-4">
              <p>
                {item.name} : {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
