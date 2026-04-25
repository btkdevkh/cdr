import Link from "next/link";
import Image from "next/image";

const MainTitle = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Stop Logo" width={70} height={37} />
        <h1 className="text-3xl font-bold">CDR_FR</h1>
      </div>
    </Link>
  );
};

export default MainTitle;
