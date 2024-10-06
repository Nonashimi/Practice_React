export const getPageCount = async(totalCount, limit) =>{
    return Math.ceil(totalCount / limit);
}
