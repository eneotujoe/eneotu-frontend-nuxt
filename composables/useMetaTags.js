import useStrapiMedia from '~~/composables/useMedia'

export function getMetaTags(seo) {
  const tags = [];

  if (seo.metaTitle) {
    tags.push(
      {
        property: "og:title",
        content: seo.metaTitle,
      },
      {
        name: "twitter:title",
        content: seo.metaTitle,
      }
    );
  }
  if (seo.metaDescription) {
    tags.push(
      {
        name: "description",
        content: seo.metaDescription,
      },
      {
        name: "author",
        content: seo.author,
      },
      {
        property: "og:description",
        content: seo.metaDescription,
      },
      {
        name: "twitter:description",
        content: seo.metaDescription,
      }
    );
  }
  if (seo.shareImage) {
    const imageUrl = useStrapiMedia(seo.shareImage.data.attributes.url);
    tags.push(
      {
        name: "image",
        content: imageUrl,
      },
      {
        property: "og:image",
        content: imageUrl,
      },
      {
        name: "twitter:image",
        content: imageUrl,
      }
    );
  }
  if (seo.article) {
    tags.push({
      property: "og:type",
      content: "article",
    });
  }
  tags.push({ name: "twitter:card", content: "summary_large_image" });

  return tags;
}
