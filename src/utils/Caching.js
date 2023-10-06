import _ from 'lodash';
import { fecthData } from './FetchData.js';
// FUNCTION FOR SEARCH QUERY
export const searchDataFunction = async (query) => {
    const data = await fecthData();
    if (!data) {
        throw new ErrorHandler("Blogs not found.", 404);
    }
    const { blogs } = data;
    const regex = new RegExp(query, "gi");
    const searchedData = _.filter(blogs, ({ title }) => regex.test(title));

    return searchedData;
}
//FUNCTION FOR FECTHING AND Analyzing Blogs
export const getStats = async () => {
 
    const data = await fecthData();
    if (!data) {
        throw new ErrorHandler("Blogs not found.", 404);
    }
    const { blogs } = data;
    let totalBlogs = _.size(blogs); 
    let { title } = _.maxBy(blogs, blog => _.get(blog, "title.length", 0));
    let privacyTitleBlogs = _.size(_.filter(blogs, (blog) => /privacy/gi.test(blog.title)));
    let uniqueBlogs = _.uniqBy(blogs, "title");
 return {totalBlogs,longestTitle:title,privacyTitleBlogs,uniqueBlogs};
}

// IMPLEMENTING CACHING MECHANISM
export const memoizedSearchFunction = _.memoize(searchDataFunction);

export const memoizedStatsFunction = _.memoize(getStats); 
