import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import GithubSlugger from "github-slugger"
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import { remarkCodeHike } from "@code-hike/mdx"
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const theme = require("shiki/themes/dark-plus.json")


const allTagNames = ["Next.js", "MDX", "Next Conf", "React Conf"]
const allTagSlugs = ["next", "mdx", "next-conf", "react-conf"]
const allId = ["1", "2", "3", "4"]



const computedFields = {
  readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      // use same package as rehypeSlug so toc and sluggified headings match
      // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
      const slugger = new GithubSlugger()

      // https://stackoverflow.com/a/70802303
      const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g

      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag
          const content = groups?.content
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          }
        },
      )

      return headings
    },
  },

};

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    id: { type: 'number', required: true },
    slug: { type: 'string', required: true },
    name: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
}));

const Category = defineNestedType(() => ({
  name: 'Category',
  fields: {
    id: { type: 'number', required: true },
    slug: { type: 'string', required: true },
    name: { type: 'string', required: true }
  },
}));

const Tag = defineNestedType(() => ({
  name: 'Tag',
  fields: {
    id: { type: 'number', required: true },
    slug: { type: 'string', required: true },
    name: { type: 'string', required: true }
  }
}));

const Skill = defineDocumentType(() => ({
  name: 'Skill',
  filePathPattern: 'skills/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    seoDescription: { type: 'string', required: true },
    category: {
      type: 'nested',
      of: Category,
    },
    author: {
      type: 'nested',
      of: Author,
    },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: Tag,
    },
    orderIndex: {type: "number", required: true}
  },
  computedFields,
}));

const PowerBI = defineDocumentType(() => ({
  name: 'PowerBI',
  filePathPattern: 'power-bi/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    seoDescription: { type: 'string', required: true },
    category: {
      type: 'nested',
      of: Category,
    },
    author: {
      type: 'nested',
      of: Author,
    },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: Tag,
    },
    orderIndex: {type: "number", required: true}
  },
  computedFields,
}));

const Sql = defineDocumentType(() => ({
  name: 'SQL',
  filePathPattern: 'sql/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    seoDescription: { type: 'string', required: true },
    category: {
      type: 'nested',
      of: Category,
    },
    author: {
      type: 'nested',
      of: Author,
    },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: Tag,
    },
    orderIndex: {type: "number", required: true}
  },
  computedFields,
}));

const Resource = defineDocumentType(() => ({
  name: 'Resource',
  filePathPattern: 'resources/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    seoDescription: { type: 'string', required: true },
    orderIndex: {type: "number", required: true},
    category: {
      type: 'nested',
      of: Category,
    },
    author: {
      type: 'nested',
      of: Author,
    },
    image: { type: 'string', required: true },
    tags: {
      type: 'list',
      of: Tag,
    },
    orderIndex: {type: "number", required: true}
  },
  computedFields,
}));



const contentLayerConfig = makeSource({
  contentDirPath: 'content',
  documentTypes: [Resource, Skill, Sql, PowerBI],
  mdx: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme, lineNumbers: true, showCopyButton: true, }]],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});

export default contentLayerConfig;