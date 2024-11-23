function ShoeCard({ imgURL, changeBigShoeImage, bigShoeImage }) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImage === imgURL ? "border-coral-red" : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-center bg-cover bg-card sm:w-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoeCollection"
          width={127}
          height={103}
        />
      </div>
    </div>
  );
}
export default ShoeCard;
