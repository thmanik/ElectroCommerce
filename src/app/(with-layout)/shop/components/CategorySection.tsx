import CategoryCard from "@/components/categoryCards/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselNextPMiddle,
  CarouselPreviousPMiddle,
} from "@/components/ui/carousel";
import Box from "@/components/ui/ec/Box";
import TCategory from "@/types/categories/categories";

const CategorySection = ({ categories }: { categories: TCategory[] }) => {
  return (
    <Box className="bg-white md:mt-3">
      <h1 className="text-2xl font-bold pb-2">Categories</h1>
      <Carousel>
        <CarouselContent>
          {categories.map((category) => (
            <CategoryCard key={category._id} category={category} />
          ))}
        </CarouselContent>
        <CarouselPreviousPMiddle />
        <CarouselNextPMiddle />
      </Carousel>
    </Box>
  );
};

export default CategorySection;
