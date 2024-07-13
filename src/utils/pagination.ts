export const generatePagination = (page?: string, perPage?: string) => {
    const offset = page ? parseInt(page) : 1;
    const take = perPage ? parseInt(perPage) : 20;
    const skip = (offset - 1) * take;

    return {
        page: offset,
        take,
        skip,
    };
};

export const generateTotalPage = (total: number, take: number) =>
    Math.ceil(total / take);
