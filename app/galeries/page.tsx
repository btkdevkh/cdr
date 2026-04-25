import Image from "next/image";
import galeries from "@/data/galeries.json";
import GoTop from "@/components/GoTop";

const GaleriesPage = () => {
  return (
    <div className="">
      {galeries.galeries
        .sort((a, b) => Number(a.order) - Number(b.order))
        .map((item) => (
          <div key={item.id} className="border rounded-xl p-4 mb-4 bg-gray-900">
            <Image
              src={item.path}
              alt={item.title}
              width={1000}
              height={1000}
            />
          </div>
        ))}

      <div className="flex justify-center">
        <GoTop />
      </div>
    </div>
  );
};

export default GaleriesPage;
