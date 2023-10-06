import express from 'express';
import {  blogsAnalyzedData, getSearchedData } from '../Controllers.js/BlogController.js';
export const blogRouter = express.Router();
blogRouter.route('/api/blog-stats').get(blogsAnalyzedData);
blogRouter.route('/api/blog-search').get(getSearchedData);