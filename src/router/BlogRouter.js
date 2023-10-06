import express from 'express';
import {  blogsAnalyzedData, getSearchedData } from '../Controllers.js/BlogController.js';
export const blogRouter = express.Router();
//   /api is attached as a Prefix in app.js
blogRouter.route('/blog-stats').get(blogsAnalyzedData);
blogRouter.route('/blog-search').get(getSearchedData);