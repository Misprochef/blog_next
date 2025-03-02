import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeCategorySkeleton } from "./TypeCategory";
import type { TypeTagSkeleton } from "./TypeTag";

export interface TypeBlogPostFields {
  title: EntryFieldTypes.Symbol;
  subTitle?: EntryFieldTypes.Text;
  category: EntryFieldTypes.EntryLink<TypeCategorySkeleton>;
  image?: EntryFieldTypes.AssetLink;
  imageText?: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Symbol;
  body: EntryFieldTypes.Text;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTagSkeleton>>;
  publishDate: EntryFieldTypes.Date;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
  TypeBlogPostFields,
  "blogPost"
>;
export type TypeBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
