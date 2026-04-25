"use client";

const GoTop = () => {
  const handleGoToTop = () => {
    const { scrollTo } = window;
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleGoToTop}
      title="Aller vers la haut"
      className="text-2xl cursor-pointer border-2 border-red-700 py-1 px-2 rounded-xl"
    >
      ⬆️
    </button>
  );
};

export default GoTop;
