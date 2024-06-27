'use strict';

/**
 * upcoming-auction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::upcoming-auction.upcoming-auction');
