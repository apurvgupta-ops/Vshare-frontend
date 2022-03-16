import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "yecfsaav",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token:
    "sk9TDUVqwjC7qtiH4R6JMN27mXtRopEes3kmBejBkctuGCVZXG1tzCmFA4TZNcrXIOjEoh8dix0ssGhbhkACHJnZReR7lLk3bvi1ldn7mVu4oOTDN4tdOtElYIZhP1PcM7IxF5eXQFTXTcLRkqJeRKFpBisac376njHTrG0LAsv8caVy1j1c",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
