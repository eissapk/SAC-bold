import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeCustomPieces extends Schema.Component {
  collectionName: 'components_home_custom_pieces';
  info: {
    displayName: 'customPieces';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
    cta1: Attribute.Component<'shared.cta'>;
    cta2: Attribute.Component<'shared.cta'>;
  };
}

export interface HomeIntro extends Schema.Component {
  collectionName: 'components_home_intros';
  info: {
    displayName: 'intro';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    summary: Attribute.Text;
  };
}

export interface HomeNews extends Schema.Component {
  collectionName: 'components_home_news';
  info: {
    displayName: 'news';
  };
  attributes: {
    title: Attribute.String;
    cta: Attribute.Component<'shared.cta'>;
  };
}

export interface HomePhilosophy extends Schema.Component {
  collectionName: 'components_home_philosophies';
  info: {
    displayName: 'philosophy';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
    cta: Attribute.Component<'shared.cta'>;
  };
}

export interface HomeProducts extends Schema.Component {
  collectionName: 'components_home_products';
  info: {
    displayName: 'products';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    cta: Attribute.Component<'shared.cta'>;
  };
}

export interface HomeSummary extends Schema.Component {
  collectionName: 'components_home_summaries';
  info: {
    displayName: 'summary';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    title: Attribute.Text;
    description: Attribute.Text;
  };
}

export interface SharedCta extends Schema.Component {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    label: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.custom-pieces': HomeCustomPieces;
      'home.intro': HomeIntro;
      'home.news': HomeNews;
      'home.philosophy': HomePhilosophy;
      'home.products': HomeProducts;
      'home.summary': HomeSummary;
      'shared.cta': SharedCta;
      'shared.seo': SharedSeo;
    }
  }
}
