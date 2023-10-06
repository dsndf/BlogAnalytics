import { asyncError } from "../middleware/CatchAsyncError.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import _ from 'lodash';
import { fecthData } from "../utils/FetchData.js";
import { memoizedSearchFunction, memoizedStatsFunction } from "../utils/Caching.js";


export const blogsAnalyzedData = asyncError(async (req, res, next) => {
    const data = await fecthData();
    if (!data) {
        return next(new ErrorHandler("Blogs not found.", 404));
    }
    const { blogs } = data;
    const { longestTitle, totalBlogs, privacyTitleBlogs, uniqueBlogs } = await memoizedStatsFunction();
    res.json({
        success: true,
        totalBlogs,
        longestTitle,
        privacyTitleBlogs,
        uniqueBlogs
    })
});



export const getSearchedData = asyncError(async (req, res, next) => {
    const { query } = req.query;
    const searchedData = await memoizedSearchFunction(query);
    res.json({
        success: true,
        searchedData
    })
})