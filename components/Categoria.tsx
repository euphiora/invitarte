import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export type Categoria = {
  id: number;
  name: string;
  isSelected: boolean;
};

type CategoryListProps = {
  categories: Categoria[];
  onCategorySelected: (categoryId: number | undefined) => void;
};

type CategoryProps = Omit<Categoria, "id"> & {
  onCategorySelected: (categoryId: number | undefined) => void;
  id?: number;
};

const Category = ({
  name,
  id,
  isSelected,
  onCategorySelected,
}: CategoryProps) => {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      size={"sm"}
      className={cn("rounded-full px-6")}
      onClick={() => onCategorySelected(id)}
    >
      {name}
    </Button>
  );
};

export const CategoryList = ({ categories, onCategorySelected }: CategoryListProps) => {
  const hasSelectedCategory = categories.some(
    (category) => category.isSelected
  );
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Category
        onCategorySelected={onCategorySelected}
        name="Todas"
        isSelected={!hasSelectedCategory}
      />
      {categories.map((category) => (
        <Category
          key={category.id}
          onCategorySelected={onCategorySelected}
          {...category}
        />
      ))}
    </div>
  );
};
