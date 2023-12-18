import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeIntro extends Schema.Component {
  collectionName: 'components_home_intros';
  info: {
    displayName: 'intro';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.intro': HomeIntro;
    }
  }
}
