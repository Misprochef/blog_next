import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCategoryFields {
    name: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    sort: EntryFieldTypes.Integer;
    definition: EntryFieldTypes.Symbol;
}

export type TypeCategorySkeleton = EntrySkeletonType<TypeCategoryFields, "category">;
export type TypeCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCategorySkeleton, Modifiers, Locales>;
