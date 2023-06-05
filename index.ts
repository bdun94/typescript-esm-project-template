import 'dotenv';
import {unified} from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import remarkStringify from 'remark-stringify'

main()

async function main() {
  const file = await unified()
    .use(rehypeParse)
    .use(rehypeRemark)
    .use(remarkStringify)
    .process('<h1>Hello, world!</h1>')

  console.log(String(file))
}
