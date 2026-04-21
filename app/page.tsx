import Image from "next/image";
import data from "@/data/data.json";
import GoTop from "@/components/GoTop";

export default function Home() {
  return (
    <div className="max-w-125 mx-auto">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Stop Logo" width={70} height={37} />
        <h1 className="text-3xl font-bold">CDR Essentielle FR</h1>
      </div>
      <br />
      <hr />

      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">
          Les essentielles du code de la route
        </h2>
        <div>
          {data.data.map((item, index) => (
            <div
              key={item.id}
              className="border rounded-xl p-4 mb-4 bg-gray-900"
            >
              <p>
                {item.name} : {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <GoTop />
      </div>
    </div>
  );
}
