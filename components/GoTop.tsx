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
      className="text-2xl cursor-pointer"
    >
      ⬆️
    </button>
  );
};

export default GoTop;
