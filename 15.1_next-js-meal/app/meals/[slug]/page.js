const MealChoicePage = ({ params }) => {
  return (
    <>
      <h1>This is meal choice page</h1>
      <p>{params.slug}</p>
    </>
  );
};
export default MealChoicePage;
