import contentful, { type EntryFieldTypes } from "contentful";

export interface BlogPost {
  contentTypeId: "blogPost";
  sys: {
    id: string;
  };
  fields: {
    slug: EntryFieldTypes.Text,
    name: EntryFieldTypes.Text;
    postBody: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    postImage: EntryFieldTypes.AssetLink;
  };
}

export interface ImgType {
  fields: {
    title: string;
    file: {
      fileName: string;
      contentType: string;
      details: {
        image: {
          width: number;
          height: number;
        };
        size: number;
      };
      url: string;
    };
    description: string;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});
