import Ig from '@/core/Ig'

const ig = new Ig()

async function main() {
  const res = await ig.getData('32439100503')
  console.log(res)
}

main()
