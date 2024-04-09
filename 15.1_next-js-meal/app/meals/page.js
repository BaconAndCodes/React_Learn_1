import Link from "next/link";
export default MealPage = () => {
  return (
    <main>
      <h1>This is meal page</h1>
      <Link href="meals/share">Share</Link>
      <Link href="meals/meal-1">Meal 1</Link>
    </main>
  );
};

