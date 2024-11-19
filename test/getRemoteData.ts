import Ig from '@/core/Ig'

const ig = new Ig('https://www.instagram.com/reel/DCZJdjKyB7x/?utm_source=ig_web_copy_link')

async function main() {
  const res =  await ig.getData()
  console.log(res)
}

main()
