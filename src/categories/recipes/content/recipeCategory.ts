
export type RecipeCategoryId = 'MainCourse'

export type RecipeCategory = {
    id: RecipeCategoryId,
    label: string,
    pluralLabel: string,
    color: string
}

export const RecipeCategories: Record<RecipeCategoryId, RecipeCategory> = {
    MainCourse: {
        id: 'MainCourse',
        label: 'Main course',
        pluralLabel: 'Main courses',
        color: 'light-dark(#c084fc, #3b0764)'
    }
}
