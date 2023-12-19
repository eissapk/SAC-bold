'use strict';

/**
 * news-press service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-press.news-press');
